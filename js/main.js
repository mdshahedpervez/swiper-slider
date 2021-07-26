$(document).ready(function(){
    const swiper = new Swiper('.swiper-container', {
        // Optional parameters
        effect: 'coverflow',
        grabCursor: true,
        autoplay:{
            delay: 3000,
        },
        speed: 1000,
        // If we need pagination
    pagination: {
    el: '.swiper-pagination',
        },
        // And if we need scrollbar
        scrollbar: {
        el: '.swiper-scrollbar',
        },
        // Navigation arrows
      navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
        },
    });
});