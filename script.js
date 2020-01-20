//PWA APP
if (navigator.serviceWorker.controller) {
  console.log('[PWA Builder] active service worker found, no need to register')
} else {
  navigator.serviceWorker.register('sw.js', {
    scope: './'
  }).then(function(reg) {
    console.log('Service worker has been registered for scope:'+ reg.scope);
  });
}
//

$(window).scrollTop(0); 
$('body,html').css( "overflow", "hidden" );


window.onload = function(){
    $('body,html').css( "overflow", "visible" );
    document.getElementById('load_bg').style.opacity="0";
    
    //Отключение загрузочного окна
    offloadscreen = function(){ 
        document.getElementById('load_bg').style.display="none";
    }
    
    setTimeout(offloadscreen, 500);
    //Параллакс в верхней части экрана
    window.onscroll = function() { 
        var scrolled = window.pageYOffset;
        parall.style.backgroundPosition="0px "+scrolled+"px";
        
    }
    
    
    var winwid=document.documentElement.clientWidth;
    
    
    $(document).ready(function(){
        //прокрутка до первого якоря
        $("#b1").click(function(){

            $("html").animate({
                scrollTop: "388px"
            }, 500 );
        });
        
        //прокрутка до второго якоря
        $("#b2").click(function(){ 

            $("html").animate({
            scrollTop: "1223px"
            }, 500 );
        });
        
        //прокрутка до третьего якоря
        $("#b3").click(function(){

            $("html").animate({
            scrollTop: "2058px"
            }, 500 );
        });
        function moveItem() {
            callb.style.backgroundColor="#7ff";
            setTimeout(function() {
                callb.style.backgroundColor="azure";
            }, 500);
        }

        setInterval(moveItem, 5000);
        
        $(window).scroll(function(){
            var scrolled = window.pageYOffset;

                // анимация появления и исчезновения кнопки автопрокрутки вверх
                if((window.pageYOffset)>100){ 
                    $('.gotop').show(300);
                    $('.gotop').css('visibility','visible')
                }
                else{
                    $('.gotop').hide(300);
                }
            //изменение цвета кнопок якорей
            if((window.pageYOffset)<387){ 
                var scrolled = window.pageYOffset;
                $("#b1").css('backgroundColor','rgb(165, 223, 239)');
                $("#b2").css('backgroundColor','rgb(165, 223, 239)');
                $("#b3").css('backgroundColor','rgb(165, 223, 239)');
                
            }
            
            //изменение цвета кнопок якорей
            if(((window.pageYOffset)>=387)&((window.pageYOffset)<1185)){
                var scrolled = window.pageYOffset;
                $("#b1").css('backgroundColor','rgb(97, 182, 236)');
                $("#b2").css('backgroundColor','rgb(165, 223, 239)');
                $("#b3").css('backgroundColor','rgb(165, 223, 239)');
                $('.const').show(1000);
            }
            
            //изменение цвета кнопок якорей
            if((window.pageYOffset)>=1223){
                var scrolled = window.pageYOffset;
                $("#b2").css('backgroundColor','rgb(97, 182, 236)');
                $("#b1").css('backgroundColor','rgb(165, 223, 239)');
                $("#b3").css('backgroundColor','rgb(165, 223, 239)');
            }
            
            //изменение цвета кнопок якорей
            if((window.pageYOffset)>=2058){
                $("#b3").css('backgroundColor','rgb(97, 182, 236)');
                $("#b2").css('backgroundColor','rgb(165, 223, 239)');
                $("#b1").css('backgroundColor','rgb(165, 223, 239)');
            }
        })
        
        //кнопка прокрутки наверх страницы
        $('.gotop').click(function(){ 
            $('body,html').animate({
                scrollTop:0
            },2500);
         })
        
        $('.callb-img').click(function(){ 
            $(".callb_wind_bg").css( "display", "block" );
            $(".callb_wind").css('transform','scale(1,1)');
            $('body,html').css( "overflow", "hidden" );
         })
        
        //вызов окна заказа обратног звонка
        $("#callb").click(function(){ 
            $(".callb_wind_bg").css( "display", "block" );
            $(".callb_wind").css('transform','scale(1,1)');
            $('body,html').css( "overflow", "hidden" );
        });
        
        //закрытие окна обратного звонка по нажатию вне области окна
        $(".callb_wind_bg").click(function(){ 
            $(".callb_wind_bg").css( "display", "none" );
            $(".callb_wind").css('transform','scale(0,0)');
            $('body,html').css( "overflow", "visible" );
        });
        
        //закрыти окна обратного звонка по нажатию на крестик
        $(".close_wind").click(function(){ 
            $(".callb_wind_bg").css( "display", "none" );
            $(".callb_wind").css('transform','scale(0,0)');
            $('body,html').css( "overflow", "visible" );
        });
    });
    
    
    $("#wind_calc_btn").click(function(){ 
        $total=wind_width.value*wind_height.value*wind_packs.value*1.3*0.0012;
        if(($total>=0)&&($total<42120)){
            price.innerHTML = "Цена: ~ "+Math.ceil($total)+" руб.";
        }
    });
}