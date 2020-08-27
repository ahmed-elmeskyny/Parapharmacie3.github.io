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
let categorie = document.querySelector("#categorie");
let dropmenu = document.querySelector(".dropmenu");
let li = document.querySelectorAll(".li");
let icon = document.querySelectorAll(".icon");
let aa = document.querySelectorAll(".li a");

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


categories.addEventListener("click",()=>{
    subMenu.style.height="100%";
})


up.addEventListener("click",()=> {
    window.scrollTo(0,0);
})

bars.addEventListener("click",()=>{
    menu.style.width = "100%";
    aside.style.width = "70%";

})

menu.addEventListener("click",(e)=>{
    if(e.target.id != "categories"){
        menu.style.width = "0";
        aside.style.width = "0";
    }
})

search1.addEventListener("click",()=>{
    search.style.height="100px";
    trans.style.height="100%";
})

trans.addEventListener("click",(e)=>{
    if(e.target.classList != "search1" && e.target.classList != "search2" && e.target.classList != "search-mobile" ){
        search.style.height="0";
        trans.style.height="0";
    }
})

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
        aa[i].style.color="#0bab64";
        icon[i].style.color="#0bab64";
    })
}

for(let i=0; i<li.length;i++){
   li[i].addEventListener("mouseout",function(){
       li[i].style.textDecoration="none";
       aa[i].style.color="black";
       icon[i].style.color="black";
   })
}