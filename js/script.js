window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");
  const content = document.getElementById("content");

  // รอ 2.5 วิแล้วค่อย fade out
  setTimeout(() => {
    preloader.style.display = "none";
    content.style.display = "block";
  }, 2500);
});
