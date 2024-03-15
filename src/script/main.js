"use strict"

window.addEventListener('DOMContentLoaded', ()=>{
    const menu = document.querySelector('.hamburger'),
          menuList = document.querySelector('.header__menu-list');

    menu.addEventListener('click', ()=> {
        menuList.classList.add('header__menu-list_mobile');
    });


    // CART
    const cart = document.querySelector('.cart'),
          overlay = document.querySelector('.overlay'),
          cartBtn = document.querySelector('.header__cart'),
          cartClose = document.querySelector('.cart__close');

    function showCart() {
            cart.classList.remove('hide');
            overlay.classList.add('active');
    }
    cartBtn.addEventListener('click', showCart);

    function closeCart() {
            overlay.classList.remove('active');
            cart.classList.add('hide');
    }

    cartClose.addEventListener('click', closeCart);

    overlay.addEventListener('click', (e)=> {
        if (e.target === overlay) {
            closeCart();
        }
    });

    document.addEventListener('keydown', (e)=> {
        if (e.code === "Escape" && overlay.classList.contains('active')) {
            closeCart();
        }
    })

});