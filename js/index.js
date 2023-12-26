// jQuery
let arrArt = $('.ticketing .art');

$('.ticketing-nav li').click(function(){
  $('.ticketing-nav li').removeClass('active');
  $(this).addClass('active');
  let sJson = '../ajax/' + $(this).attr('select-movie') + '.json';
  // let sJson = 'https://pam7461.github.io/megabox/ajax/' + $(this).attr('select-movie') + '.json';
  fnJson(sJson);
})

const movieSwiper = new Swiper('.movie-swiper',{
  slidesPerView:1.5,
  spaceBetween:20,
  freeMode:true,
  breakpoints:{
    640:{
      slidesPerView:2.2,
    },
    760:{
      slidesPerView:2.8,
      spaceBetween:30,
    },
    960:{
      slidesPerView:3.5,          
    },
    1280:{
      slidesPerView:4.3,
      spaceBetween:40,
    }
  }
});

fnJson('../ajax/boxoffice.json');
// fnJson('https://pam7461.github.io/megabox/ajax/boxoffice.json');



const benefitSwiper01 = new Swiper('.benefit-swiper01',{
  effect:'fade',
  loop:true,
  navigation:{
    nextEl:'.benefit-button-next',
    prevEl:'.benefit-button-prev',
  },
  pagination:{
    el:'.benefit-pagination',
    type:'fraction',
  },
  scrollbar:{
    el:'.benefit-scrollbar',
  }
});

const benefitSwiper02 = new Swiper('.benefit-swiper02',{
  loop:true,
});

// 터치 잠금
benefitSwiper01.allowTouchMove=false;
benefitSwiper02.allowTouchMove=false;

// 베네핏 슬라이더 동기화
benefitSwiper01.controller.control = benefitSwiper02;
benefitSwiper02.controller.control = benefitSwiper01;

// 자동재생
benefitSwiper02.autoplay.start();

// 베네핏 슬라이더 멈춤이벤트
$('.benefit-pause').click(function(){
  $(this).removeClass('active');
  $('.benefit-start').addClass('active');
  benefitSwiper02.autoplay.pause();
})
// 베네핏 슬라이더 재생이벤트
$('.benefit-start').click(function(){
  $(this).removeClass('active');
  $('.benefit-pause').addClass('active');
  benefitSwiper02.autoplay.start();
})

// 랜덤(0~3)
let randomBenefit = setInterval(function(){
  let idx = (Math.round(Math.random()*10) % 4);
  
  $('.benefit-banner .img-box').removeClass('active');
  $('.art03 .img-box').eq(idx).addClass('active');
  $('.art04 .img-box').eq(idx).addClass('active');
  $('.art05 .img-box').eq(idx).addClass('active');
},5000);
  
// 큐레이션 
$('.curation-nav a').click(function(e){
  let curationImg = $(this).children('img').attr('src');
  let curationData = $(this).attr('curation-data');
  $('.curation-poster img').attr('src',curationImg);      
  $('#curation-con').load(`../ajax/curation_data.txt #${curationData}`);
  if($(window).width()>=760){
    e.preventDefault();
  }      
})

const curationSwiper = new Swiper('.curation-swiper',{
  slidesPerView:2.5,
  spaceBetween:20,
  freeMode:true,
  loop:true,
  breakpoints:{
    760:{
      slidesPerView:4,
      freeMode:false,
      loop:false,
    },
  }
});