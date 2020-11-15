let desk_menu=document.querySelector(".toggle");
let mobile_menu=document.querySelector(".mobile_menu");
function open_hamburger(){
    desk_menu.classList.toggle("active");
    mobile_menu.classList.toggle("active");
}