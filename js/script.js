document
  .getElementById("menu-toggle")
  .addEventListener("click", function () {
    const mobileMenu = document.getElementById("mobile-menu");
    mobileMenu.classList.toggle("hidden");
    gsap.from("#mobile-menu", {
      duration: 0.5,
      y: -20,
      opacity: 0,
      ease: "power3.out",
    });
  });

// GSAP Animation for Navbar on Load
gsap.from("nav", {
  duration: 0.8,
  y: -50,
  opacity: 0,
  ease: "power3.out",
}); 