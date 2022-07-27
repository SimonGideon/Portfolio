const hambuger = document.querySelector('.hambuger');

const navMenu = document.querySelector('.nav-menu');
hambuger.addEventListener('click', () => {
  hambuger.classList.toggle('active');
  navMenu.classList.toggle('active');
  document.getElementById("bdy-bg").style.display = "none";
  const btn1 = document.getElementById('wkbtn1');
  const btn2 = document.getElementById('wkbtn2');
  const btn3 = document.getElementById('wkbtn3');
  const btn4 = document.getElementById('wkbtn4');
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hambuger.classList.remove('active');
  navMenu.classList.remove('active');
}));
