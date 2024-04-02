

const menu = document.querySelector(".bx-menu");
const nav = document.querySelector("nav .nav-menu");


menu.addEventListener('click', ()=>{
    nav.classList.toggle("show-nav");
})


document.addEventListener("DOMContentLoaded", function() {
    const topArrow = document.querySelector(".top");
    window.addEventListener("scroll", function() {
      if (window.scrollY > window.innerHeight) {
        topArrow.classList.add("visible");
      } else {
        topArrow.classList.remove("visible");
      }
    });
  });


  const links = document.querySelectorAll("nav #link");

  links.forEach((link)=>{
    link.addEventListener("click", function(){
        nav.classList.remove("show-nav");
    });
  });



 



