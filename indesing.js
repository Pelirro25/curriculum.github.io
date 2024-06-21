let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const slider = document.getElementById('slider');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

function updateSliderPosition() {
    const offset = -currentIndex * 100;
    slider.style.transform = `translateX(${offset}%)`;
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
    updateSliderPosition();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
    updateSliderPosition();
});
