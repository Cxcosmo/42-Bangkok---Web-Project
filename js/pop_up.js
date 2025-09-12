const popup = document.getElementById("popup");
const popupImg = document.getElementById("popup-img");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".grid img").forEach(img => {
  img.addEventListener("click", () => {
    popup.style.display = "block";
    popupImg.src = img.src;
  });
});

closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
});

popup.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.style.display = "none";
  }
});
