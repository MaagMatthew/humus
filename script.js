var canvas = document.getElementById('barGraph');
var ctx = canvas.getContext('2d');
var dim = 500;
var border = 100;
var xSpace= 105;
var lineSpace = 100;
var reviews= [11, 4, 5, 3, 2];
// 5,5,5,5,5,5,5,5,5,5,5,4,4,4,4,3,3,3,3,3,2,2,2,1,1

function drawRect()
{
    ctx.fillStyle = "#7e3896";
    ctx.fillRect(border, 25, dim, dim);
    ctx.fill();
}

drawRect();

function drawBars() 
{
    ctx.fillStyle = "#f8d267";
    for(var i = 0; i<reviews.length; i++)
    {
    ctx.fillRect(border,(xSpace*i+40),(reviews[i] * 20),50);
    }
    ctx.fill();
}
drawBars();

function drawLines()
{
    ctx.fillStyle = "#f8d267";
    for(var i = 0; i<reviews.length; i++)
    {
        ctx.fillRect((border + (lineSpace*i)),25,1,dim);
    }
    ctx.fill();
}
drawLines();

function labels()
{
    ctx.font = "25px Arial";
    ctx.fillStyle = "#7e3896";

    for(var i = 0; i<reviews.length; i++)
    {
        ctx.fillText( (i+1) + " Stars",10,(dim-(105*(i))));
    }
}
labels();