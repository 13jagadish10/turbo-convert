document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".carousel-item");
  const indicators = document.querySelectorAll(".indicator");
  let currentIndex = 0;
  const totalSlides = slides.length;
  const slideInterval = 10000; // 5 seconds

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.opacity = i === index ? "1" : "0";
    });
    indicators.forEach((indicator, i) => {
      indicator.classList.toggle("bg-cyan-700", i === index);
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
  }

  document
    .querySelector("[data-carousel-prev]")
    .addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      showSlide(currentIndex);
    });

  document
    .querySelector("[data-carousel-next]")
    .addEventListener("click", () => {
      nextSlide();
    });

  indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
      currentIndex = index;
      showSlide(currentIndex);
    });
  });

  setInterval(nextSlide, slideInterval);
  showSlide(currentIndex);
});
// gsap.from(".grid div", {
//   opacity: 0,
//   y: 50,
//   duration: 1,
//   stagger: 0.2,
// });
// gsap.to("#cta-button", {
//   scale: 1.1,
//   repeat: -1,
//   yoyo: true,
//   duration: 0.8,
//   ease: "power1.inOut",
// });

// gsap.from(".grid div", {
//   opacity: 0,
//   y: 50,
//   duration: 1,
//   stagger: 0.3,
// });
 
// Toggle Mobile Menu
