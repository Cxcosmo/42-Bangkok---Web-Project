const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

function setActiveLink() {
    let current = "about-me";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
}

setActiveLink();

window.addEventListener("scroll", setActiveLink);

const hamburger = document.getElementById("hamburger");
const nav = document.querySelector("header nav");

hamburger.addEventListener("click", () => {
    nav.classList.toggle("open");
});