$(function(){
    if(document.cookie == 'TMP=true'){
        $('.popup').hide();
    }else{
        $('.popup').show();
    }


    // 난수 발생 함수
    function fnRandom(num){
        let idx = Math.floor(Math.random() * 100 % num);
        return idx;
    }
    
    // 랜덤 광고
    $('.ad01 li').eq(fnRandom(4)).show();
    $('.ad02 li').eq(fnRandom(4)).show();
    $('.login-ad li').eq(fnRandom(4)).show();
    $('.benefit-ad .img-box').eq(fnRandom(5)).show();
    $('.benefit .banner01 .img-box').eq(fnRandom(5)).show();
    $('.benefit .banner02 .img-box').eq(fnRandom(5)).show();

    // 광고닫기
    $('.btn-ad01-close').click(function(){                
        $('.ad01').hide();
    });

    // 링크 타이틀 닫기            
    $('a').each(function(idx){
        let dtListsHtml = $('a').eq(idx).html();
        $('a').eq(idx).attr('title',`${dtListsHtml} 가기`);
    });


    // 서브네비게이션 호출
    $('.main-nav>li').mouseenter(function(){
        $('.header').addClass('active');                
        $('.main-nav>li').removeClass('active');                
        $(this).addClass('active');                
    });

    // 서브네비게이션 닫기
    $('.header').mouseleave(function(){
        $('.main-nav>li').removeClass('active');
        $(this).removeClass('active');
    });


    // 로그인 호출
    // let btnOpen = document.querySelector('#btn-login-open');
    // btnOpen.onclick = function(e){
    //     let loginWindow = document.querySelector('.login');
    //     loginWindow.classList.add('active');
    //     e.preventDefault();
    // }

    $('#btn-login-open,.my-megabox button').click(function(e){
        $('.login').show();
        e.preventDefault();
    });
   
    // 로그인 닫기
    // let btnClose = document.querySelector('#btn-login-close');
    // btnClose.onclick = function(){
    //     let loginWindow = document.querySelector('.login');
    //     loginWindow.classList.remove('active');
    // }

    $('#btn-login-close').click(function(){
        $('.login').hide();
    });


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
    $('.btn-popup-close').click(function(){
        let chk = $('#chk-noshow').is(':checked');
        if(chk){
            document.cookie = `TMP=true;path=/;max-age=${24*60*60}`;
        }
        $('.popup').hide();
    });

    // popup 슬라이더 멈춤
    $('.btn-stop').click(function(){
        $(this).removeClass('active');
        $('.btn-start').addClass('active');
        popupSwiper.autoplay.stop();
    })

    // popup 슬라이더 재생
    $('.btn-start').click(function(){
        $(this).removeClass('active');
        $('.btn-stop').addClass('active');
        popupSwiper.autoplay.start();
    })

    
    // $('#btn-sitemap').click(function(){
    //     $('.header .art').not('.site-map').hide();
    //     $('.site-map').toggle();
    // });

    // $('#btn-search').click(function(){
    //     $('.header .art').not('.search').hide();
    //     $('.search').toggle();
    // });

    // $('#btn-my-megabox').click(function(){
    //     $('.header .art').not('.my-megabox').hide();
    //     $('.my-megabox').toggle();
    // });

    // QNAV
    $('.btn-qnav').click(function(e){
        let showClass = $(this).attr('data-role');
        $('.header .art').not(`.${showClass}`).hide();
        $(`.${showClass}`).toggle();
        e.preventDefault();
    });

    //SEARCH
    $('.search-tit li').click(function(e){
        e.preventDefault();
        $('.search-tit li').removeClass('active');
        $(this).addClass('active');
        $('.tab').removeClass('active');
        let thisText = $(this).text();
        if(thisText == '예매율 순'){
            $('.booking').addClass('active');
        }else{
            $('.gallery').addClass('active');
        }
    })

    $('.movie-list li').mouseenter(function(){
        let acIdx = $(this).index();
        $('.tab.active .movie-poster li').removeClass('active');
        $('.tab.active .movie-poster li').eq(acIdx).addClass('active');
    })

    //쿠키생성
    // document.cookie = `userId=pam7461;path=/;max-age=10`;

    // 쿠키조회
    // console.log(document.cookie);
    


    // 모바일 이벤트
    // TICKET
    $('.m-ticket').click(function(){
        let confirmMsg = confirm('로그인 후 사용가능합니다.\n로그인 하시겠습니까?');
        if(confirmMsg){
            $('.login').show();
        }
    })


    // M-NAV 열기
    $('.m-btn-nav').click(function(){
        $('.m-nav').show();
    })

    // M-NAV 닫기
    $('.btn-m-nav-close button').click(function(){
        $('.m-nav').hide();
    })

    $('#m-login-show').click(function(e){
        e.preventDefault();
        $('.m-nav').hide();
        $('.login').show();
    })

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

    $('.swiper-start-stop').click(function(){
        $(this).toggleClass('start');
        if($(this).hasClass('start')){
            benefitSwiper01.autoplay.stop();
        }else{
            benefitSwiper01.autoplay.start();
        }
    })

    // CURATION AJAX
    function fnCuration(num){
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
                }
                $('.curation-poster img').attr('src',`./images/${data.src}`);                        
            },
            error:function(){
                console.log('Error');
            },
        });
    }



    fnCuration(1);
    $('.curation-list li').click(function(e){
        e.preventDefault();
        fnCuration($(this).index()+1);                
    })
})