function ShowNav() {
    document.getElementById("nav").style.width = "80%";
    document.getElementById("close").style.display = "block";
}
function HideNav() {
    document.getElementById("nav").style.width = "0%";
    document.getElementById("close").style.display = "none";
}

// Slide
var newImageSlide = [
    "./img/1.jpg",
    "./img/2.jpg"
];

var slide = document.querySelectorAll(".main_slide img");
slide.forEach(function(img, index) {
    img.src = newImageSlide[index];
});

$('.owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplaySpeed: 500,
    center: true,
    items: 1,
    margin: 10,
})

var newAdr = "./img/1.png";
var imgAdr = document.querySelectorAll(".adr img");
imgAdr.forEach(function(img) {
    img.src = newAdr;
});