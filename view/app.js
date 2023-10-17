const hamburger = document.getElementById("ham-menu");
const navList = document.getElementById("nav-list");
const check = document.getElementById("check");
const closeBtn = document.getElementById("closebtn");

const shopI = document.getElementById("shop-item");
const drp = document.getElementById("drp");

//close menu
closeBtn.addEventListener("click", () => {
   navList.classList = "nav-list";
   navList.classList.add("nav-hidden");
   setTimeout(function () {
      navList.classList = "hide";
   }, 500);
});
//dropdown
//nav
hamburger.addEventListener("click", () => {
   navList.classList = "nav-list";
   navList.classList.add("nav-visible");
});

// page action

const home = document.getElementById("home");
//nav item btn
const hmBt = document.getElementById("hm-btn");
const ttBt = document.getElementById("tt-down");
const igBt = document.getElementById("ig-down");
const ytBt = document.getElementById("yt-down");

ttBt.addEventListener("click", function () {
   window.location.href = "../download/tt.html";
});
igBt.addEventListener("click", function () {
   home.innerHTML = ``;
});
ytBt.addEventListener("click", function () {
   home.innerHTML = ``;
});

hmBt.addEventListener("click", function () {
   window.location.href = "../"
});
