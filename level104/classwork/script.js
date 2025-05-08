let slides = document.querySelector('.slides');
let slide = document.querySelectorAll('.slide');
let prevButton = document.querySelector('.prev');
let nextButton = document.querySelector('.next');
let XContainer = document.querySelector('.X');

let currentIndex = 0;

slide.forEach((_, index) => {
    let indicator = document.createElement('div');
    indicator.classList.add('indicator');
    if (index === 0) indicator.classList.add('active');
    XContainer.appendChild(indicator);
    indicator.addEventListener('click', () => goToSlide(index));
});

let X = document.querySelectorAll('.indicator');

function updateX() {
    X.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentIndex);
    });
}

function goToSlide(index) {
    currentIndex = index;
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateX();
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slide.length;
    goToSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slide.length) % slide.length;
    goToSlide(currentIndex);
}

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

setInterval(nextSlide, 5000);