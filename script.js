document.addEventListener("DOMContentLoaded", () => {
  console.log("Website Elegan Yusuf Ramdani Aktif!");

  // Scroll smooth untuk navbar
  document.querySelectorAll("nav a").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: "smooth",
      });
    });
  });
});
