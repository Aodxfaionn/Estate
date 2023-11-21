// круговой текст
const circlesTop = document.querySelectorAll('.circle-top');
const circlesBottom = document.querySelectorAll('.circle-bottom');

for (circle of circlesTop) new CircleType(circle).radius(180);
for (circle of circlesBottom) new CircleType(circle).radius(180);

// Бургерное меню
const burger = document.querySelector(".burger");
menu = document.querySelector(".submenu");

burger.addEventListener("click", () => {
  menu.classList.toggle("active");
  burger.classList.toggle("active");
});

// Якорные ссылки
const links = document.querySelectorAll('a[href^="#"]');
links.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});