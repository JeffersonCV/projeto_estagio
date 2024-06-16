
const carouselSlide = document.querySelector('.carousel-slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const images = document.querySelectorAll('.carousel-slide img');


let counter = 0;
const size = images[0].clientWidth; 


nextBtn.addEventListener('click', () => {
  if (counter >= images.length - 1) return;
  carouselSlide.style.transition = 'transform 0.5s ease-in-out';
  counter++;
  carouselSlide.style.transform = `translateX(${-size * counter}px)`;
});


prevBtn.addEventListener('click', () => {
  if (counter <= 0) return;
  carouselSlide.style.transition = 'transform 0.5s ease-in-out';
  counter--;
  carouselSlide.style.transform = `translateX(${-size * counter}px)`;
});


carouselSlide.addEventListener('transitionend', () => {
  if (images[counter].id === 'lastClone') {
    carouselSlide.style.transition = 'none';
    counter = images.length - 2;
    carouselSlide.style.transform = `translateX(${-size * counter}px)`;
  }
  if (images[counter].id === 'firstClone') {
    carouselSlide.style.transition = 'none';
    counter = images.length - counter;
    carouselSlide.style.transform = `translateX(${-size * counter}px)`;
  }
});
