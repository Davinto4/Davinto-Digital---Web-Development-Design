// Preloader
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  setTimeout(() => {
    preloader.classList.add("hidden");
  }, 800);
});

// Typewriter Effect
const words = ["Building Websites", "Designing Experiences", "Everything Tech & Digital"];
let i = 0, j = 0, currentWord = "", isDeleting = false;

function type() {
  currentWord = words[i];
  document.getElementById("typewriter").textContent = 
    currentWord.substring(0, j) + (j % 2 === 0 ? "|" : "");

  if (!isDeleting && j < currentWord.length) {
    j++;
    setTimeout(type, 150);
  } else if (isDeleting && j > 0) {
    j--;
    setTimeout(type, 100);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) i = (i + 1) % words.length;
    setTimeout(type, 1000);
  }
}
type();

// Scroll Reveal Animations
ScrollReveal().reveal('.hero-content', { delay: 200, duration: 1000, origin: 'bottom', distance: '50px' });
ScrollReveal().reveal('.card', { delay: 200, duration: 1000, origin: 'bottom', distance: '50px', interval: 200 });
ScrollReveal().reveal('.project', { delay: 200, duration: 1000, origin: 'bottom', distance: '50px', interval: 200 });
ScrollReveal().reveal('.about, .contact', { delay: 200, duration: 1000, origin: 'left', distance: '50px' });

// Back to Top Button
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});