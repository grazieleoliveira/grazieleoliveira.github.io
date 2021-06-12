var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 1750,
        disableOnInteraction: false,
    },
    effect: 'coverflow',
    grabCursor: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 150,
      modifier: 2,
      slideShadows: true,
    },

    loop: true,
    
  });


  function toggleMenu(){
      const menuToggle = document.querySelector('.toggle');
      const navigation = document.querySelector('.navigation')
      menuToggle.classList.toggle('active')
      navigation.classList.toggle('active')
  }