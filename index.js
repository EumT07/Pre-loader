"use strict"

const preloader = document.getElementById("preloader");
const header = document.getElementById("header");

//Normal

// window.addEventListener("load", ()=>{
    // preloader.classList.add("hide-preloader");
// }) 

//Adding time in order to be able to watch the preloader
window.onload = ()=>{
    setTimeout(()=>{
        preloader.classList.add("hide-preloader");
        header.style.visibility = "visible";
    },4800)
    // setTimeout(()=>{
    //     header.style.visibility = "visible";
    // },5000)
    
}
