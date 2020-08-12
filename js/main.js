let source =["img/nani.jpg","img/vichy.jpg","img/Ceylon-Naturals.jpg"];
let slide  = document.querySelector("#slide");
let option = document.querySelectorAll(".option");
let categorie = document.querySelector("#categorie");
let dropmenu = document.querySelector(".dropmenu");
let li = document.querySelectorAll(".li");
let icon = document.querySelectorAll(".icon");
let cardConseil = document.querySelectorAll(".card-conseil");
let conseilImg = document.querySelector(".conseil-img img");
let conseilPage = document.querySelector(".conseil-page");
let container = document.querySelector(".container");
let up = document.querySelector(".up");
let menu = document.querySelector(".mobile-menu");
let bars = document.querySelector(".fa-bars1");
let aside = document.querySelector(".aside");
let mobile = document.querySelector(".mobile-header");
let search = document.querySelector(".search-mobile");
let search1 = document.querySelector(".mobile-header .nani .fa-search");
let trans = document.querySelector(".transparent");
let categories = document.querySelector("#categories");
let subMenu = document.querySelector("#sub-menu");
let i=0;



 categorie.addEventListener("mouseover",function(){
     dropmenu.style.display = "inline-block";
 })
 categorie.addEventListener("mouseout",function(){
        dropmenu.style.display = "none";
 })

 let Mousein=function(){
    dropmenu.style.display = "inline-block";
 }
 let mouseout=function(){
    dropmenu.style.display = "none";
 }
  
 for(let i=0; i<li.length;i++){
     li[i].addEventListener("mouseover",function(){
         li[i].style.textDecoration ="underline";
         icon[i].style.color="#17E600";
     })
 }

 for(let i=0; i<li.length;i++){
    li[i].addEventListener("mouseout",function(){
        li[i].style.textDecoration="none"
        icon[i].style.color="black";
    })
}

window.addEventListener("scroll",function(){
   let head = document.querySelector(".nosticky");
   head.classList.toggle("sticky", window.scrollY > 110);
   mobile.classList.toggle("sticky-mobile",window.scrollY > 500);
   if(window.scrollY > 110) {
       up.style.display="inline";
   }else if (window.scrollY < 110){  
       up.style.display="none";
   } 
})

cardConseil.forEach((i)=>{
     i.addEventListener("click",(e)=>{
         conseilImg.setAttribute("src",e.target.getAttribute("src"));
          conseilPage.style.display="inline";
     })
}) 
conseilPage.addEventListener("click",(e)=> {
    if(e.target.classList=="conseil-page"){
        conseilPage.style.display="none";
    }
})

up.addEventListener("click",()=> {
    window.scrollTo(0,0);
})

bars.addEventListener("click",()=>{
    menu.style.width = "100%";
    aside.style.width = "70%";

})

menu.addEventListener("click",(e)=>{
    if(e.target.id  != "categories"){
        menu.style.width = "0";
        aside.style.width = "0";
    }
})

search1.addEventListener("click",()=>{
    search.style.height="100px";
    trans.style.height="100%";
})

trans.addEventListener("click",(e)=>{
    console.log(e.target)
    if(e.target.classList != "search1" && e.target.classList != "search2" && e.target.classList != "search-mobile" ){
        search.style.height="0";
        trans.style.height="0";
    }
})

categories.addEventListener("click",()=>{
  if( subMenu.style.height === "100%"){  
    subMenu.style.height="0";
  }else if(subMenu.style.height="0"){
    subMenu.style.height="100%";
  }
})



 
