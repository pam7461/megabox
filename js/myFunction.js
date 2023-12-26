function fnLoginOpen(el){
  let cfValue = confirm('로그인 후 사용가능합니다.\n로그인 하시겠습니까?');
  if(cfValue){
    fnOpen(loginForm);
    modalOn();        
  }else{
    fnClose(loginForm);
    modalOff();        
  }
  el.preventDefault();
}
function fnClose(el){
  el.style.display='none';
}
function fnOpen(el){
  el.style.display='block';
}
// 모달 on
function modalOn(){
  body.style.overflow = 'hidden';
}
// 모달 off
function modalOff(){
  body.style.overflow = 'auto';
}
function fnJson(url){
      $.getJSON(url,function(data){
        $.each(data,function(idx,row){
          $('.movie-name').eq(idx).text(row.movieName);
          $('.movie-num').eq(idx).text(row.movieNum);
          $('.movie-img img').eq(idx).attr('src',row.movieSrc);
          $('.movie-img img').eq(idx).attr('alt',row.movieAlt);
          $('.movie-best').eq(idx).text(row.movieBest);
          $('.movie-txt').eq(idx).html(row.movieTxt);
          $('.movie-review span:last-child').eq(idx).text(row.movieReview);
        })
      });
    }
