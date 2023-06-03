const burger = document.querySelector('.burger');
const menuIcon = document.querySelector('#menu-icon');
const dropMenu = document.querySelector('.drop-menu');

burger.addEventListener('click', function () {
  if (menuIcon.src.includes('burger-menu-right-svgrepo-com.svg')) {
    menuIcon.src = "./assets/img/close-md-svgrepo-com.svg";
  } else {
    menuIcon.src = "./assets/img/burger-menu-right-svgrepo-com.svg";
  }
  
  dropMenu.classList.toggle('active');
});
