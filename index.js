// function myFunction() {
//   var x = document.getElementById("myTopnav");
//   if (x.className === "navbar") {
//     x.className += " responsive";
//   } else {
//     x.className = "navbar";
//   }
// }

let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

let sections=document.querySelectorAll('section')
let navLinks=document.querySelectorAll('header nav ul li a')

menuIcon.onClick=()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
function responsive(){
    var elmt=document.querySelector('.navbar') ;
    elmt.classList.toggle("res");
}

