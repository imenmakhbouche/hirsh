
// Opening And Closing NavList

let open_nav_list=document.querySelector("#open_nav_list")
let close_nav_list=document.querySelector("#close_nav_list")
let nav_list=document.querySelector(".nav_list")
let header=document.querySelector("header")
let plus_btn=document.querySelector("#plus_btn")
let minus_btn=document.querySelector("#minus_btn")
let Leistungen_list=document.querySelector(".Leistungen_list")
let image_section1=document.querySelector(".image_section1")
open_nav_list.addEventListener("click",function(){
    open_nav_list.style.display="none"
    close_nav_list.style.display="block"
    nav_list.classList.add("nav_list_show")
    header.style.borderColor="white"
    image_section1.style.paddingTop="30.5vh"
    
})
close_nav_list.addEventListener("click",function(){
    open_nav_list.style.display="block"
    close_nav_list.style.display="none"
    nav_list.classList.remove("nav_list_show")
    header.style.borderBottom="2px solid #14287B"
    image_section1.style.paddingTop="8vh"
    plus_btn.style.display="block"
    minus_btn.style.display="none"
    Leistungen_list.style.display="none"
})

// Opening And Closing The + list in the navlist



plus_btn.addEventListener("click",function(){
    plus_btn.style.display="none"
    minus_btn.style.display="block"
    Leistungen_list.style.display="block"
    Leistungen_list.style="animation: show 300ms ease-in-out;"
})

minus_btn.addEventListener("click",function(){
    plus_btn.style.display="block"
    minus_btn.style.display="none"
    Leistungen_list.style.display="none"
})

// rr
window.addEventListener('scroll', function() {
    var button = document.querySelector('.scroll-to-top');
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;

    if (scrolled > 80) {
        button.style.display = 'block';
      header.style="top:0 !important; height:10vh !important ;border-bottom: 2px solid #14287b !important;"
    } else {
        button.style.display = 'none';
        header.style="top:5vh; height:15vh;border-bottom:none;"
    }
  });
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }