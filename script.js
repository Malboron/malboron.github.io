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
    function resize_callb(){ 
        var winwid=document.documentElement.clientWidth;

        if(winwid>=1024){
            document.getElementById('textheader').style.display="none";
            document.getElementById('callb').style.marginLeft="40%";
        }
        if(winwid==1280){
            document.getElementById('textheader').style.display="block";
            document.getElementById('textheader').style.display="flex";
        }
        if(winwid<=1000){
            document.getElementById('textheader').style.display="none";
            document.getElementById('callb').style.marginLeft="40%";
            callb_wind.style.width="100%";
        }
        if(winwid>1280){
            document.getElementById('textheader').style.display="block";
            document.getElementById('textheader').style.display="flex";
        }

        var winwid=document.documentElement.clientWidth;

        //изменение расположение элементов в шапке на экранах с шириной меньше 1200px    
        if(winwid<1200)
            {
                document.getElementById('textheader').style.display="none";
                document.getElementById('callb').style.marginLeft="40%";
            }
            else{

                document.getElementById('textheader').style.display="block";
                document.getElementById('textheader').style.display="flex";
                document.getElementById('callb').style.marginLeft="3%";
            }
    }
    resize_callb();
    
    //вызов функции перемещения окна обратной связи при изменении разрешения экрана
    window.onresize = function(){ 
        resize_callb();
    } 
    
    $(document).ready(function(){
        
        //прокрутка до первого якоря
        $("#b1").click(function(){ 
            $("html").animate({
                scrollTop: "387px"
            }, 500 );
        });
        
        //прокрутка до второго якоря
        $("#b2").click(function(){ 
            $("html").animate({
            scrollTop: "787px"
            }, 500 );
        });
        
        //прокрутка до третьего якоря
        $("#b3").click(function(){ 
            $("html").animate({
            scrollTop: "1161px"
            }, 500 );
        });
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
                $('.otherworks').css('position',"relative");
                $('.callme').css('position',"relative");
                $('.otherworks').css('marginTop',"0px");
                $('.callme').css('marginTop',"0px");
            }
            
            //изменение цвета кнопок якорей
            if(((window.pageYOffset)>=387)&((window.pageYOffset)<387*2)){
                var scrolled = window.pageYOffset;
                $("#b1").css('backgroundColor','rgb(97, 182, 236)');
                $("#b2").css('backgroundColor','rgb(165, 223, 239)');
                $("#b3").css('backgroundColor','rgb(165, 223, 239)');
                $('.otherworks').css('position',"fixed");
                $('.otherworks').css('marginTop',"-387px");
                $('.callme').css('position',"relative");
                $('.callme').css('marginTop',"387px");
                $('.zamer').css('marginTop',"0px");
            }
            
            //изменение цвета кнопок якорей
            if((window.pageYOffset)>=387*2){
                var scrolled = window.pageYOffset;
                $("#b2").css('backgroundColor','rgb(97, 182, 236)');
                $("#b1").css('backgroundColor','rgb(165, 223, 239)');
                $("#b3").css('backgroundColor','rgb(165, 223, 239)');
                $('.callme').css('position',"fixed");
                $('.callme').css('marginTop',"-387px");
                $('.zamer').css('marginTop',"774px");
            }
            
            //изменение цвета кнопок якорей
            if((window.pageYOffset)>=387*3){
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