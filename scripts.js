var slideIndex = 0;
var timer1, timer;
var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("dot");

function showSlide(n) {
    
    clearTimeout(timer1);
    clearTimeout(timer);

    
    for (var i = 0; i < slides.length; i++) 
        slides[i].style.display = "none";
    for (var i = 0; i < dots.length; i++) 
        dots[i].className = dots[i].className.replace(" active", "");

    
    if (n == slides.length)
        slideIndex = 0; 
    if (n < 0)
        slideIndex = slides.length;

    
    slides[slideIndex].style.display = "block"; 

 
}