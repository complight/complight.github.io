function modulo(number, mod) {
  let result = number % mod;
  if (result < 0) {
    result += mod;
  }
  return result;
}

function setUpCarousel(carousel) {
  const slidesContainer = carousel.querySelector('[data-carousel-slides-container]');
  const numSlides = slidesContainer.children.length;

  // Initialize currentSlide here so it's accessible to all functions
  let currentSlide = 0;

  function changeSlide(slideNumber) {
    carousel.style.setProperty('--current-slide', slideNumber);
  }

  function handleNext() {
    currentSlide = modulo(currentSlide + 1, numSlides);
    changeSlide(currentSlide);
  }

  function handlePrevious() {
    currentSlide = modulo(currentSlide - 1, numSlides);
    changeSlide(currentSlide);
  }

  function autoAdvance() {
    // Use the modulo function to wrap around
    currentSlide += 1;
    currentSlide %= numSlides; 
    changeSlide(currentSlide);
  }

  const buttonPrevious = carousel.querySelector('[data-carousel-button-previous]');
  const buttonNext = carousel.querySelector('[data-carousel-button-next]');

  // Set up events for buttons
  buttonPrevious.addEventListener('click', handlePrevious);
  buttonNext.addEventListener('click', handleNext);

  // Start automatic advancement every second (1000 milliseconds)
  let autoInterval = setInterval(autoAdvance, 2000);

  // Add mouseover and mouseout event listeners to the carousel
  carousel.addEventListener('mouseover', () => {
    clearInterval(autoInterval);
  });

  carousel.addEventListener('mouseout', () => {
    autoInterval = setInterval(autoAdvance, 1000);
  });
}

const carousels = document.querySelectorAll('[data-carousel]');
carousels.forEach(setUpCarousel);
