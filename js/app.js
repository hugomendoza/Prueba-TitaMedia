var jsonFile = "js/data.js";
var len = image_data.length;

for (var i = 0; i < len; i++) {
  var slideImg = image_data[i];
  var post=document.createElement('div');
  post.className = "mySlides fade"
  var img = document.createElement("img");
  img.src = slideImg.folder;
  var foo = document.getElementById("slider");
  foo.appendChild(post);
  post.appendChild(img);
}

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 2 seconds
}

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "nav") {
      x.className += " responsive";
  } else {
      x.className = "nav";
  }
}