var canvas = document.getElementById('barGraph');
var ctx = canvas.getContext('2d');
var dim = 250;
var border = 50;
var xSpace= 52.5;
var lineSpace = 50;
var reviews= [11, 4, 5, 3, 2];
// 5,5,5,5,5,5,5,5,5,5,5,4,4,4,4,3,3,3,3,3,2,2,2,1,1

function drawRect()
{
    ctx.fillStyle = "#7e3896";
    ctx.fillRect(border, 12.5, dim, dim);
    ctx.fill();
}

drawRect();

function drawBars() 
{
    ctx.fillStyle = "#f8d267";
    for(var i = 0; i<reviews.length; i++)
    {
    ctx.fillRect(border,(xSpace*i+20),((reviews[i]) * 10),25);
    }
    ctx.fill();
}
drawBars();

function drawLines()
{
    ctx.fillStyle = "#f8d267";
    for(var i = 0; i<reviews.length; i++)
    {
        ctx.fillRect((border + (lineSpace*i)),12.5,1,dim);
    }
    ctx.fill();
}
drawLines();

function labels()
{
    ctx.font = "20px Arial";
    ctx.fillStyle = "#7e3896";

    for(var i = 0; i<reviews.length; i++)
    {
        ctx.fillText( (i+1) + " Stars", 5,(dim-(52.5*(i))));
    }
}
labels();