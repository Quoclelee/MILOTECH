let slides = document.querySelectorAll('.slide');
let currentSlide = 0;
let isAnimating = false;

function nextSlide() {
    if (!isAnimating) {
        isAnimating = true;
        slides[currentSlide].style.transition = 'transform 1s ease-in-out';
        slides[currentSlide].style.transform = 'translateX(-100%)';

        slides[currentSlide].addEventListener('transitionend', handleTransitionEnd, { once: true });
    }
}

function handleTransitionEnd() {
    slides[currentSlide].style.display = 'none';

    let nextSlideIndex = (currentSlide + 1) % slides.length;

    slides[nextSlideIndex].style.display = 'block';
    slides[nextSlideIndex].style.transition = 'none';
    slides[nextSlideIndex].style.transform = 'translateX(100%)';

    slides[nextSlideIndex].offsetWidth;

    slides[nextSlideIndex].style.transition = 'transform 1s ease-in-out';
    slides[nextSlideIndex].style.transform = 'translateX(0)';

    currentSlide = nextSlideIndex;
    isAnimating = false;
}

let slideInterval = setInterval(nextSlide, 3000);