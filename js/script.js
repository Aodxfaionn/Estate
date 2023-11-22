// круговой текст
const circlesTop = document.querySelectorAll('.circle-top');
const circlesBottom = document.querySelectorAll('.circle-bottom');

for (circle of circlesTop) new CircleType(circle).radius(90);
for (circle of circlesBottom) new CircleType(circle).radius(90);

new CircleType(document.querySelector('.circle-header-top')).radius(160);
new CircleType(document.querySelector('.circle-header-bottom')).radius(160);


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