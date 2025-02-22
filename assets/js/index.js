const swiper = new Swiper('.swiper', {
    
    direction: 'horizontal',
    loop: true,
    spaceBetween: 40,
    grabCursor: true,

    breakpoints : {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    },
  
   
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
   
  });