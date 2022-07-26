const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".menu-items");
const navlinks = document.querySelectorAll(".nav-item");   

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    document.getElementById("bar-1").style.transform = "translateY(8px) rotate(45deg)";
    document.getElementById("bar-2").style.opacity = "0";
    document.getElementById("bar-3").style.transform = "translateY(-8px) rotate(-45deg)";
    navMenu.style.display = "block";
    document.querySelector(".my-logo").style.display = "none";
    document.getElementById("bar-1").style.zIndex = "99";
    document.getElementById("bar-3").style.zIndex = "99";
    document.getElementById("bar-3").style.backgroundColor = "#fff";
    document.getElementById("bar-1").style.backgroundColor = "#fff";
});

document.querySelectorAll(".nav-item").forEach(n => n.addEventListener("click", () =>{
    hambuger.classList.remove("active");
    navMenu.classList.remove("active");
}));
