"use strict"

window.addEventListener('DOMContentLoaded', ()=>{
    const menu = document.querySelector('.hamburger'),
          menuList = document.querySelector('.header__menu-list');

    menu.addEventListener('click', ()=> {
        menuList.classList.add('header__menu-list_mobile');
    });
});