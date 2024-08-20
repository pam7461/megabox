window.onload=function(){ 
    // CURATION AJAX
    let fnCuration = (num)=>{
        $.ajax({
            url:`./json/curation0${num}.json`,
            dataType:'json',
            success:function(data){
                $('.curation-list h3').html(`#${data.tit}소사이어티`);
                $('.curation-list h4').html(`${data.sTit}`);
                $('#p1').html(`${data.p1}`);
                $('#p2').html(`${data.p2}`);
                if(data.tit == '필름'){
                    $('.curation-poster p').html(`MEGABOX<br>FILM<br>SOCIETY`);
                }else{
                    $('.curation-poster p').html(`MEGABOX<br>CLASSIC<br>SOCIETY`);
                };
                $('.curation-poster img').attr('src',`./images/${data.src}`);                        
            },
            error:function(){
                console.log('Error');
            },
        });
    };

    
    fnCuration(1);
    // 보이기 함수           
    let fnShow = (element,displayValue)=>{
        element.style.display = displayValue;
    };
    // 감추기 함수
    let fnHide = (element)=>{
        element.style.display = 'none';
    };
    // 난수 발생 함수
    let fnRandom = (divNum)=>{
        let idx = Math.floor(Math.random() * 100 % divNum);
        return idx;
    };
    // 클래스 추가
    let fnAddClass = (element,className)=>{
        element.classList.add(className);                
    };
    // 클래스 제거
    let fnRemoveClass = (element,className)=>{
        element.classList.remove(className);
    };
    // BOX OFFICE SWIPER JS
    let boxOfficeSwiper = new Swiper('.box-office-swiper',{
        slidesPerView:2.4,
        spaceBetween:24,
        // autoplay: {
        //     delay: 3000,
        // },
        loop:true,
        breakpoints:{
            620:{
                slidesPerView:2.8,
            },
            860:{
                slidesPerView:3.2,
            },
            990:{
                slidesPerView:3.8,
            },
            1100:{
                slidesPerView:4.5,
            },
        },
    });
    // BENEFIT SWIPER01
    let benefitSwiper01 = new Swiper('.benefit-swiper01',{
        allowTouchMove:false,
        autoplay: {
            delay: 3000,
        },
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            type: "fraction",
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });
    let benefitSwiper02 = new Swiper('.benefit-swiper02',{
        allowTouchMove:false,
        effect: "cube",
    });
    benefitSwiper01.controller.control = benefitSwiper02;
    benefitSwiper02.controller.control = benefitSwiper01;

    let swiperStartStop = document.querySelector('.swiper-start-stop');
    let popup = document.querySelector('.popup');
    let NodeList01 = document.querySelectorAll('.ad01 li');
    let NodeList02 = document.querySelectorAll('.ad02 li');
    let NodeList03 = document.querySelectorAll('.login-ad li');
    let NodeList04 = document.querySelectorAll('.benefit-ad .img-box');
    let NodeList05 = document.querySelectorAll('.benefit .banner01 .img-box');
    let NodeList06 = document.querySelectorAll('.benefit .banner02 .img-box');
    let ad01Close = document.querySelector('.btn-ad01-close');
    let allA = document.querySelectorAll('a');
    let mainNav = document.querySelectorAll('.main-nav>li');
    let header = document.querySelector('.header');
    let btnOpen = document.querySelector('#btn-login-open');
    let btnClose = document.querySelector('#btn-login-close');
    let btnPopupClose = document.querySelector('.btn-popup-close');
    let btnStop = document.querySelector('.btn-stop'); 
    let btnStart = document.querySelector('.btn-start');
    let btnQnav = document.querySelectorAll('.btn-qnav');
    let searchTit = document.querySelectorAll('.search-tit li');
    let movieList = document.querySelectorAll('.movie-list li');
    let mTicket = document.querySelector('.m-ticket');
    let mBtnNav = document.querySelector('.m-btn-nav');
    let mBtnNavClose = document.querySelector('.btn-m-nav-close button');
    let mLoginShow = document.querySelector('#m-login-show');
    let curationList = document.querySelectorAll('.curation-list li');

    // EVENT
    // BENEFIT START STOP            
    swiperStartStop.onclick = (e)=>{
        e.target.classList.toggle('start');
        if(e.target.classList.contains('start')){
            benefitSwiper01.autoplay.stop();
        }else{
            benefitSwiper01.autoplay.start();
        };
    };


    // 문서가 시작할대 쿠키에 따른 팝업 이벤트            
    if(document.cookie == 'TMP=true'){                
        fnHide(popup);
    }else{
        fnShow(popup,'block');
    };

    // 랜덤 광고            
    fnShow(NodeList01[fnRandom(4)],'block');
    fnShow(NodeList02[fnRandom(4)],'block');
    fnShow(NodeList03[fnRandom(4)],'block');
    fnShow(NodeList04[fnRandom(5)],'block');
    fnShow(NodeList05[fnRandom(5)],'block');
    fnShow(NodeList06[fnRandom(5)],'block');
    
    // 광고닫기
                
    ad01Close.onclick = ()=>{                           
        fnHide(document.querySelector('.ad01'));
    };

    // 링크에 타이틀 넣기
    
    for(let idx=0;idx<=allA.length-1;idx++){
        allA[idx].title = `${allA[idx].innerText} 가기`;
    };
    
    // 서브네비게이션 호출
    
    for(let idx=0;idx<=mainNav.length-1;idx++){
        mainNav[idx].onmouseenter = (e)=>{
            let header = document.querySelector('.header');
            fnAddClass(header,'active');
            for(let idx=0;idx<=mainNav.length-1;idx++){
                fnRemoveClass(mainNav[idx],'active');
            };
            fnAddClass(e.target,'active');
        };
    };
    
    // 서브네비게이션 닫기            
    header.onmouseleave = (e)=>{
        for(let idx2=0;idx2<=mainNav.length-1;idx2++){
            fnRemoveClass(mainNav[idx2],'active');
        };
        fnRemoveClass(e.target,'active');
    };

    // 로그인 호출
    
    btnOpen.onclick = (e)=>{
        let loginWindow = document.querySelector('.login');
        fnAddClass(loginWindow,'active');                
        e.preventDefault();
    };
    // 로그인 닫기
    
    btnClose.onclick = ()=>{
        let loginWindow = document.querySelector('.login');
        fnRemoveClass(loginWindow,'active');
    };

    // popup swiper JS
    let popupSwiper = new Swiper('.swiper-container',{
        autoplay:{
            delay:5000
        },
        effect:'fade',
        pagination:{
            el:'.swiper-pagination',
            clickable:true,
        },
    });

    // popup 닫기
    
    btnPopupClose.onclick = ()=>{
        let chkNoshow = document.querySelector('#chk-noshow');               
        if(chkNoshow.checked){
            document.cookie = `TMP=true;path=/;max-age=${24*60*60}`;
        };
        let popup = document.querySelector('.popup');
        fnHide(popup);
    };

     // popup 슬라이더 멈춤
    
    btnStop.onclick = (e)=>{
        fnRemoveClass(e.target,'active');                
        fnAddClass(btnStart,'active');
        popupSwiper.autoplay.stop();
    };
    // popup 슬라이더 재생
    btnStart.onclick = (e)=>{
        fnRemoveClass(e.target,'active');                
        fnAddClass(btnStop,'active');
        popupSwiper.autoplay.start();
    };
    
    // QNAV
    
    for(let idx=0;idx<=btnQnav.length-1;idx++){
        btnQnav[idx].onclick = function(e){
            let thisDataRole = this.getAttribute('data-role');
            let headerArt = document.querySelectorAll('.header .art');                    
            for(let idx=0;idx<=headerArt.length-1;idx++){
                if(headerArt[idx].classList.contains(thisDataRole)){
                    if(headerArt[idx].style.display == 'none' || headerArt[idx].style.display == ''){
                        fnShow(headerArt[idx],'block');
                    }else{
                        fnHide(headerArt[idx]);
                    };
                }else{
                    fnHide(headerArt[idx]);
                };
            };
            e.preventDefault();
        };
    };
  

    //SEARCH TAB
    
    for(let idx=0;idx<=searchTit.length-1;idx++){
        searchTit[idx].onclick = function(e){
            e.preventDefault();
            for(let idx=0;idx<=searchTit.length-1;idx++){
                fnRemoveClass(searchTit[idx],'active');
            };
            fnAddClass(e.target,'active');
            let tab = document.querySelectorAll('.tab');
            for(let idx=0;idx<=searchTit.length-1;idx++){
                fnRemoveClass(tab[idx],'active');
            };
            let thisText = e.target.innerText;
            if(thisText == '예매율 순'){
                fnAddClass(tab[0],'active');
            }else{
                fnAddClass(tab[1],'active');
            };
        };
    };
    

    // SEARCH MOVIE POSTER
    
    for(let idx=0;idx<=movieList.length-1;idx++){
        movieList[idx].onmouseenter = function(){
            let acIdx = idx % 5;
            let acMoviePoster = document.querySelectorAll('.tab.active .movie-poster li');
            for(let idx=0;idx<=acMoviePoster.length-1;idx++){
                fnRemoveClass(acMoviePoster[idx],'active');
            };
            fnAddClass(acMoviePoster[acIdx],'active');
        };
    };
    

    // 모바일 이벤트
    // TICKET
    
    mTicket.onclick = ()=>{
        let confirmMsg = confirm('로그인 후 사용가능합니다.\n로그인 하시겠습니까?');
        if(confirmMsg){
            fnAddClass(document.querySelector('.login'),'active');
        };
    };
    


    // M-NAV 열기
    
    mBtnNav.onclick = ()=>{
        fnShow(document.querySelector('.m-nav'),'block');
    };          

    // M-NAV 닫기
    
    mBtnNavClose.onclick = ()=>{
        fnHide(document.querySelector('.m-nav'));
    };
    // LOGIN SHOW    
    mLoginShow.onclick = (e)=>{
        e.preventDefault();
        fnHide(document.querySelector('.m-nav'));
        fnAddClass(document.querySelector('.login'),'active');
    }; 
    // CURATION LIST     
    for(let idx=0;idx<=curationList.length-1;idx++){
        curationList[idx].onclick = function(e){
            e.preventDefault();
            fnCuration(idx + 1);
        };
    };
};