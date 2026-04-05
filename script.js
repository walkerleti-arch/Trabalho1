window.addEventListener('scroll', function() {
    const header = document.getElementById('header-wrapper');

    if(window.scrollY > 50) {
        header.classList.remove('header-tranparent');
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
        header.classList.add('header-tranparent');
    }
});

    const slides = document.querySelector('.carousel-slides');
const slideImages = document.querySelectorAll('.carousel-slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const dots = document.querySelectorAll('.dot');

let currentIndex = 0;
const totalSlides = slideImages.length;

function updateCarousel() {
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateCarousel();
}

if (nextBtn && prevBtn) {
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel();
    });
});