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
            scrollTop: "1188px"
            }, 500 );
        });
        
        //прокрутка до третьего якоря
        $("#b3").click(function(){ 
            $("html").animate({
            scrollTop: "1588px"
            }, 500 );
        });
        $(window).scroll(function(){
            var scrolled = window.pageYOffset;
            console.log(window.pageYOffset);
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

            }
            
            //изменение цвета кнопок якорей
            if((window.pageYOffset)>=1185){
                var scrolled = window.pageYOffset;
                $("#b2").css('backgroundColor','rgb(97, 182, 236)');
                $("#b1").css('backgroundColor','rgb(165, 223, 239)');
                $("#b3").css('backgroundColor','rgb(165, 223, 239)');
            }
            
            //изменение цвета кнопок якорей
            if((window.pageYOffset)>=1585){
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
}