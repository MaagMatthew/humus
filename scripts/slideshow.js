var image = document.getElementById("image");

var imageArray = ["images/hummus1.png", "images/hummus2.png", "images/hummus3.png", "images/hummus4.jpg", "images/hummus5.jpg", "images/hummus6.png", "images/hummus7.png", "images/hummus8.png"];

var i = 0;
function changeImage(){
    image.setAttribute("src",imageArray[i]);
    i++;
    if(i>=imageArray.length){
        i=0;
    }
}

window.onload = function(){
    setInterval(changeImage,2000);
}