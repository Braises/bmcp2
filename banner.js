// JavaScript untuk Banner dengan Tombol Panah
let currentSlideIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    // Pastikan index tetap dalam range slide
    if (index >= totalSlides) {
        currentSlideIndex = 0;
    } else if (index < 0) {
        currentSlideIndex = totalSlides - 1;
    } else {
        currentSlideIndex = index;
    }

    // Geser slide sesuai index
    const sliderContainer = document.querySelector('.slider-container');
    sliderContainer.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
}

// Navigasi dengan Panah
document.querySelector('.arrow-left').addEventListener('click', () => {
    showSlide(currentSlideIndex - 1);
});

document.querySelector('.arrow-right').addEventListener('click', () => {
    showSlide(currentSlideIndex + 1);
});
