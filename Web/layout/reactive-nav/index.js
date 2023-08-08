const menus = document.querySelectorAll(".sidebar_menu li");
console.log(menus);
menus.forEach((menu) => {
  menu.addEventListener("click", function () {
    clearSelection();
    this.classList.toggle("active");
  });
});
const clearSelection = () => {
  menus.forEach((menu) => {
    menu.classList.remove("active");
  });
};
const hamburger = document.querySelector(".hamburger");
const wrapper = document.querySelector(".wrapper");
hamburger.addEventListener("click", function () {
  wrapper.classList.add("active");
});
const close = document.querySelector(".close");
close.addEventListener("click", function () {
  wrapper.classList.remove("active");
});
