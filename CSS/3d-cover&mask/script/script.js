const ACTIVE = "active";

const active_img = document.querySelectorAll(".main-structure .content img");

const menu_logo = document.querySelector("header .menu-logo");
const main_header = document.querySelector(".content .text-description h1");
const second_header = document.querySelector(".content .text-description h2");
const paragraph = document.querySelector(".content .text-description p");
const text_link = document.querySelector(".content .text-description a");
const main_structure = document.querySelector(".main-structure");
const menu_button = document.querySelectorAll(".aside-menu a");

active_img[0].classList.remove(ACTIVE);
active_img[0].classList.add(ACTIVE);

main_header.innerHTML = CONTENT_INFO.skate_board.h1;
second_header.innerHTML = CONTENT_INFO.skate_board.h2;
paragraph.innerHTML = CONTENT_INFO.skate_board.p;
text_link.innerHTML = "explore";

menu_logo.addEventListener("click", () => {
  menu_logo.classList.toggle(ACTIVE);
  main_structure.classList.toggle(ACTIVE);
});

menu_button.forEach((button, index) => {
  button.addEventListener("click", () => {
    active_img.forEach((video) => {
      video.classList.remove(ACTIVE);
    });
    active_img[index].classList.add(ACTIVE);
    console.log(index);
  });
});
