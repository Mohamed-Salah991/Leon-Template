let icons = document.querySelector(".menu i");
console.log(icons);
let menu = document.querySelector(".nav_list .menu");
console.log(menu);

let links = document.querySelector(".links");
let nav_list = document.querySelector(".nav_list");
console.log(links);

let remvoeSmall = function () {
  {
    links.classList.toggle("remove");
    nav_list.classList.toggle("active");
    if (icons.className === "fa-solid fa-bars") {
      icons.className = "fa-solid fa-xmark";
      menu.style.padding = "40px";
    } else {
      icons.className = "fa-solid fa-bars";
      menu.style.padding = "20px";
    }
  }
};
icons.addEventListener("click", remvoeSmall);

let a = document.querySelectorAll("ul li a");
console.log(a);
a.forEach(function (e) {
  e.addEventListener("click", remvoeSmall);
});
