let currentIndex = 0;
const totalSlides = document.querySelectorAll('.box-img-carousel').length;

document.querySelector('.carousel-container').addEventListener('click', (event) => {
    const direction = event.target.dataset.direction;

    if (direction === 'next') {
        currentIndex = (currentIndex + 1) % totalSlides;
    } else if (direction === 'prev') {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    }

    updateCarousel();
});

function updateCarousel() {
    const boxes = document.querySelectorAll('.box-img-carousel');
    boxes.forEach((box, index) => {
        if (index <= currentIndex) {
            box.classList.add('active');
        } else {
            box.classList.remove('active');
        }
    });

    const newTransformValue = -currentIndex * 800 + 'px';
    document.querySelector('.carousel').style.transform = 'translateX(' + newTransformValue + ')';
}
