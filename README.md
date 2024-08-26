[메가박스 바로가기](https://pam7461.github.io/megabox/)  
# MEGABOX 반응형 리뉴얼 🎥  
고정폭 방식으로 각각 제작되어 있는 MEGABOX 사이트를  

반응형으로 통합한 작업물입니다.  

랜딩페이지만 제작되었으나 CURATION 섹션은 <u><strong>AJAX</strong></u>를 확용하여  

비동기식 전송으로 구현하였다.

팝업창은 <u><strong>Cookie</strong></u>를 이용하여 24시간 동안 나타나지 않게 제작되었다.

<img src="https://pam7461.github.io/megabox/images/desktop.jpg" height="400">&nbsp;&nbsp;&nbsp;<img src="https://pam7461.github.io/megabox/images/mobile.jpg" height="400">  

  
* * *  

## 사용 툴 / 언어
- 사용 툴  
<img src="https://pam7461.github.io/megabox/images/vscode.jpg" height="80">&nbsp;&nbsp;<img src="https://pam7461.github.io/megabox/images/photoshop.png" height="80">&nbsp;&nbsp;<img src="https://pam7461.github.io/megabox/images/illustrator.png" height="80">    
  
- 사용 언어  
<img src="https://pam7461.github.io/megabox/images/html5.png" height="80">&nbsp;&nbsp;<img src="https://pam7461.github.io/megabox/images/css3.png" height="80">&nbsp;&nbsp;<img src="https://pam7461.github.io/megabox/images/js.png" height="80">&nbsp;&nbsp;<img src="https://pam7461.github.io/megabox/images/jquery.png" height="80">


* * *  

## AJAX, JSON  
CURATION 섹션에서 필요시 서버로부터 자료를 전송받아

섹션을 비동기방식으로 업데이드 할 수 있도록 구현하였다.  

```javascript
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
```


