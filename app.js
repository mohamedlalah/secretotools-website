document.querySelectorAll('[data-year]').forEach((el)=>{el.textContent=new Date().getFullYear();});
const menuButton=document.querySelector('.menu-btn');
const menu=document.querySelector('#site-menu');
if(menuButton&&menu){menuButton.addEventListener('click',()=>{const open=menu.classList.toggle('is-open');menuButton.setAttribute('aria-expanded',String(open));});menu.querySelectorAll('a').forEach((link)=>link.addEventListener('click',()=>{menu.classList.remove('is-open');menuButton.setAttribute('aria-expanded','false');}));}