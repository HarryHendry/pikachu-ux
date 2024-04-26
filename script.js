const slides = document.querySelector('.slides');
const slideWidth = document.querySelector('.card').clientWidth;

let currentIndex = 0;

document.querySelector('.next').addEventListener('click', () => {
  if (currentIndex < slides.children.length - 1) {
    currentIndex++;
    updateSlidePosition();
  }
});

document.querySelector('.prev').addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlidePosition();
  }
});

function updateSlidePosition() {
  slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}
