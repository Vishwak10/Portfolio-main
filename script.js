// menuicon navbar
let menuicon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuicon.onclick = () => {
  menuicon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// scroll section active link
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");
window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  // sticky navbar
  window.onscroll = () => {
    let header = document.querySelector(".header");

    header.classList.toggle("sticky", window.scrollY > 100);
  };
};

// remove menu icon navbar when click navbar link (scroll)

menuicon.classList.remove("bx-x");
navbar.classList.remove("active");

// dark light mode
let darkmodeicon = document.querySelector("#darkmode-icon");
darkmodeicon.onclick = () => {
  darkmodeicon.classList.toggle("bx-sun");
  document.body.classList.toggle("dark-mode");
};

// scrollreveal section
ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".Home-content, .heading", { origin: "top" });
// ScrollReveal().reveal('.Home-content, .heading', { origin: 'top' });
