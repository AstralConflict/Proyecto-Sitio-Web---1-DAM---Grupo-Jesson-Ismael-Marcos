// Header scroll effect
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    header.classList.toggle("scrolled", window.scrollY > 50);
});

// Mouse parallax effect
const hero = document.querySelector(".hero");

document.addEventListener("mousemove", (e) => {
    const x = (window.innerWidth / 2 - e.clientX) * 0.01;
    const y = (window.innerHeight / 2 - e.clientY) * 0.01;
    hero.style.transform = `translate(${x}px, ${y}px)`;
});
