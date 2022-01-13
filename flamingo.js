let hamburger = document.querySelector(".hamburger");
let navu1 = document.querySelector(".nav-ul");
let buttons = document.querySelector(".bttn");
 
    hamburger.addEventListener("click", ()=> {
    hamburger.classList.toggle("active");
    navu1.classList.toggle("active");
})

document.querySelectorAll ("nav-link").forEach(n =>n.addEventListener("click", ()=>{
    hamburger.classList.remove("active");
    navu1.classList.remove("active");
}))

buttons.addEventListener('click',()=>{
    alert("You are now Subscribed to our Newsletter");
    
})