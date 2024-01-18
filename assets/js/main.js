// ****새로고침
history.scrollRestoration = "manual";


// ** 각각 스크린마다 스케일 0.9 줄여서 화면스크롤
intro = gsap.timeline({})
gsap.to('#screenScale01 ',{
  scrollTrigger:{
      trigger:'#screenScale01',
      start:"0% 0%",
      end:"100% 0%",
      // markers:true,
      scrub:1,
    },
    // yPercent:30,
    scale: 0.9,
    delay:0.2,
    stagger:0.1,
},'a')





// ***PROJECT OVERVIEW <좌우스크롤>

var swiper = new Swiper("#mySwiper", {
  slidesPerView: 2,
  spaceBetween: 40,
  freeMode: true,
 
});






// **스타일 가이드 컬러 호버

$('.sc-color .color-left button').hover(function(){

  tabname=$(this).data('tab'); 

  $('.sc-color .color-left button').removeClass('on')
  $(this).addClass('on');

  $(tabname).addClass('on').siblings().removeClass('on');

})



// **survey 그래프 -프로그레스 바
intro = gsap.timeline({})
gsap.to('#surveyImg',{
  scrollTrigger:{
      trigger:'.sc-survey .survey-bottom',
      start:"0% 50%",
      end:"100% 100%",
      // markers:true,
      // scrub:1,
    },
  yPercent:0,
  opacity:1,
  delay:0.2,
  stagger:0.1
},'a')




gsap.to('#progress-bar60',{
  scrollTrigger:{
    trigger:".sc-survey .survey-bottom",
    start:"0% 40%",
    end:"100% 100%",
    // markers:true,
    // scrub:1,
  },
  width:'70%',
  ease:'none'
})
gsap.to('#progress-bar12',{
  scrollTrigger:{
    trigger:".sc-survey .survey-bottom",
    start:"0% 40%",
    end:"100% 100%",
    // markers:true,
    // scrub:1,
  },
  width:'45%',
  ease:'none'
})
gsap.to('#progress-bar10',{
  scrollTrigger:{
    trigger:".sc-survey .survey-bottom",
    start:"0% 40%",
    end:"100% 100%",
    // markers:true,
    // scrub:1,
  },
  width:'35%',
  ease:'none'
})
gsap.to('#progress-bar05',{
  scrollTrigger:{
    trigger:".sc-survey .survey-bottom",
    start:"0% 40%",
    end:"100% 100%",
    // markers:true,
    // scrub:1,
  },
  width:'15%',
  ease:'none'
})
gsap.to('#progress-bar03',{
  scrollTrigger:{
    trigger:".sc-survey .survey-bottom",
    start:"0% 40%",
    end:"100% 100%",
    // markers:true,
    // scrub:1,
  },
  width:'9%',
  ease:'none'
})




































