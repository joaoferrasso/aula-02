// Menu mobile

const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
});


// Botões

const startBtn = document.getElementById("startBtn");
const ctaBtn = document.getElementById("ctaBtn");

function start() {
  alert("Obrigado pelo interesse! 🚀");
}

startBtn.addEventListener("click", start);
ctaBtn.addEventListener("click", start);


// Fecha o menu ao clicar em um link

const menuLinks = document.querySelectorAll(".menu a");

menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
  });
});