
document.addEventListener("DOMContentLoaded", function () {
  const mobileBtn = document.querySelector(".mobile-btn");
  const menu = document.querySelector(".menu");
  const nav = document.querySelector(".nav");
  const navItems = document.querySelectorAll(".nav-item a");
  const registerBtn = document.querySelector(".menu .btn");
  const scrollToTopBtn = document.createElement("button");

  scrollToTopBtn.textContent = "Top";
  scrollToTopBtn.classList.add("scroll-to-top");
  document.body.appendChild(scrollToTopBtn);

  mobileBtn.addEventListener("click", function () {
    menu.classList.toggle("active");
  });

  navItems.forEach(item => {
    item.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = item.getAttribute("href").substring(1);
      document.getElementById(targetId).scrollIntoView({
        behavior: "smooth"
      });
      menu.classList.remove("active");
    });
  });

  registerBtn.addEventListener("click", function () {
    menu.classList.remove("active");
  });

  window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
      scrollToTopBtn.classList.add("visible");
    } else {
      scrollToTopBtn.classList.remove("visible");
    }
  });

  scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
      menu.classList.remove("active");
    }
  });
});



document.addEventListener('DOMContentLoaded', function () {
  const mobileBtn = document.querySelector('.mobile-btn');
  const nav = document.querySelector('.nav');

  mobileBtn.addEventListener('click', function () {
    nav.classList.toggle('open');
  });
});
