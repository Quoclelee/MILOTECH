var images = [
    "/images/asusvivobook.png",
    "/images/asusvivobook1.png",
    "/images/asusvivobook2.png",
    "/images/asusvivobook3.png",
    "/images/asusvivobook4.png"

];
var num = 0;
var slider = document.getElementById("slider");

function initZoom() {
    var zoomImages = document.querySelectorAll('.img-to-zoom');
    zoomImages.forEach(function(img) {
        img.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.6)';
            this.style.transition = 'transform 0.5s ease';
        });

        img.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    });
}

function next() {
    num = (num + 1) % images.length;
    slider.style.transform = "scale(0.4)";
    setTimeout(() => {
        slider.src = images[num];
        slider.style.transform = "scale(1)";
    }, 500);
}

function prev() {
    num = (num - 1 + images.length) % images.length;
    slider.style.transform = "scale(0.4)";
    setTimeout(() => {
        slider.src = images[num];
        slider.style.transform = "scale(1)";
    }, 500);
}
document.addEventListener("DOMContentLoaded", function() {
    initZoom();
});