// 콘텐트1 시작
$(document).ready(function () {
  const swiper1 = new Swiper('.main-slider1', {
    loop: true,              
    speed: 1000,             
    autoplay: {
      delay: 3000,            
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination1',
      clickable: true,        // 하단 원 누르면 해당 슬라이드로 이동
    },
    // 이미지가 기기별로 바뀌므로 높이값이 달라질 때를 대비
    autoHeight: true          
  });
});
// 콘텐트1 끝

// 콘텐츠2 시작
$(document).ready(function () {
  var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 5, 
    spaceBetween: 30, 
    loop: true,  
    speed: 1000,     
    autoplay: {
      delay: 2000,            
      disableOnInteraction: false,
    },

    breakpoints: {
      10: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 25,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 30,
      }
    }
  });
});
// 콘텐츠2 끝