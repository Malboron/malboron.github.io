$(window).scrollTop(0); 
$('body,html').css( "overflow", "hidden" );
window.onload = function(){
    $('body,html').css( "overflow", "visible" );
    document.getElementById('load_bg').style.opacity="0";
    offloadscreen = function(){
        document.getElementById('load_bg').style.display="none";
    }
    setTimeout(offloadscreen, 500);
    window.onscroll = function() 
    {
        var scrolled = window.pageYOffset;
        parall.style.backgroundPosition="0px "+scrolled+"px";
    }
    var winwid=document.documentElement.clientWidth;
    if(winwid<1200)
        {
            document.getElementById('textheader').style.display="none";
            document.getElementById('callb').style.marginLeft="40%";
            callb_wind.style.marginLeft="10%";
        }
    if(winwid<1200)
        {
            document.getElementById('textheader').style.display="none";
            document.getElementById('callb').style.marginLeft="40%";
            callb_wind.style.marginLeft="10%";
        }
        else{
            document.getElementById('textheader').style.display="block";
            document.getElementById('textheader').style.display="flex";
            document.getElementById('callb').style.marginLeft="3%";
            callb_wind.style.marginLeft="29%";
        }
    testbutton.onclick = function(){
        document.getElementById('textheader').style.display="block";
        document.getElementById('textheader').style.display="flex";
        document.getElementById('callb').style.marginLeft="3%";
    }
    window.onresize = function(){
    var winwid=document.documentElement.clientWidth;
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
    testbutton.onclick = function(){
        document.getElementById('textheader').style.display="block";
        document.getElementById('textheader').style.display="flex";
        document.getElementById('callb').style.marginLeft="3%";
    }
    $(document).ready(function(){
        $("#b1").click(function(){
            $("html").animate({
                scrollTop: "387px"
            }, 500 );
        });
    $("#b2").click(function(){
        $("html").animate({
        scrollTop: "787px"
        }, 500 );
    });
    $("#b3").click(function(){
        $("html").animate({
        scrollTop: "1161px"
        }, 500 );
    });
        $(window).scroll(function(){
            var scrolled = window.pageYOffset;
                if((window.pageYOffset)>100){
                    $('.gotop').show(300);
                    $('.gotop').css('visibility','visible')
                }
                else{
                    $('.gotop').hide(300);
                }
            if((window.pageYOffset)<387){
                var scrolled = window.pageYOffset;
                $("#b1").css('backgroundColor','#caffed');
        $("#b2").css('backgroundColor','#caffed');
        $("#b3").css('backgroundColor','#caffed');
                $('.otherworks').css('position',"relative");
                $('.callme').css('position',"relative");
                $('.otherworks').css('marginTop',"0px");
                $('.callme').css('marginTop',"0px");
            }
            if(((window.pageYOffset)>=387)&((window.pageYOffset)<387*2)){
                var scrolled = window.pageYOffset;
                $("#b1").css('backgroundColor','#a0dcc8');
        $("#b2").css('backgroundColor','#caffed');
        $("#b3").css('backgroundColor','#caffed');
                $('.otherworks').css('position',"fixed");
                $('.otherworks').css('marginTop',"-387px");
                $('.callme').css('position',"relative");
                $('.callme').css('marginTop',"387px");
                $('.zamer').css('marginTop',"0px");
            }
            if((window.pageYOffset)>=387*2){
                var scrolled = window.pageYOffset;
                $("#b2").css('backgroundColor','#a0dcc8');
        $("#b1").css('backgroundColor','#caffed');
        $("#b3").css('backgroundColor','#caffed');
                $('.callme').css('position',"fixed");
                $('.callme').css('marginTop',"-387px");
                $('.zamer').css('marginTop',"774px");
            }
            if((window.pageYOffset)>=387*3){
                $("#b3").css('backgroundColor','#a0dcc8');
        $("#b2").css('backgroundColor','#caffed');
        $("#b1").css('backgroundColor','#caffed');
            }
        })
     $('.gotop').click(function(){
         $('body,html').animate({
             scrollTop:0
         },2500);
     })
    $("#callb").click(function(){
        $(".callb_wind_bg").css( "display", "block" );
        $(".callb_wind").css('transform','scale(1,1)');
        $('body,html').css( "overflow", "hidden" );
    });
    $(".callb_wind_bg").click(function(){
        $(".callb_wind_bg").css( "display", "none" );
        $(".callb_wind").css('transform','scale(0,0)');
        $('body,html').css( "overflow", "visible" );
    });
    $(".close_wind").click(function(){
        $(".callb_wind_bg").css( "display", "none" );
        $(".callb_wind").css('transform','scale(0,0)');
        $('body,html').css( "overflow", "visible" );
    });
});
}