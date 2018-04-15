
window.onscroll = function() {
    var scrolled = window.pageYOffset;
    parall.style.backgroundPosition="0px "+-scrolled/7+"px";
}



window.onload =function(){
    
}

callb.onclick = function(){
   alert("В разработке..."); 
}





window.onload = function(){
    var winwid=document.documentElement.clientWidth;
    if(winwid<1200)
        {
            document.getElementById('textheader').style.display="none";
            document.getElementById('callb').style.marginLeft="40%";

        }
    if(winwid<1200)
        {
            document.getElementById('textheader').style.display="none";
            document.getElementById('callb').style.marginLeft="40%";
            document.getElementById('wind').style.marginLeft="20%";
        }
        else{
            document.getElementById('textheader').style.display="block";
            document.getElementById('textheader').style.display="flex";
            document.getElementById('callb').style.marginLeft="3%";
            
        }
    if(winwid>=1900)
    {
        document.getElementById('wind').style.marginLeft="35%";
    }
    if((winwid>1200)&&(winwid<1900))
    {
        document.getElementById('wind').style.marginLeft="30%";
    }
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
            document.getElementById('wind').style.marginLeft="20%";
        }
        else{
            document.getElementById('textheader').style.display="block";
            document.getElementById('textheader').style.display="flex";
            document.getElementById('callb').style.marginLeft="3%";
            
        }
    if(winwid>=1900)
    {
        document.getElementById('wind').style.marginLeft="35%";
    }
    if((winwid>1200)&&(winwid<1900))
    {
        document.getElementById('wind').style.marginLeft="30%";
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
        scrollTop: "1157px"
        }, 500 );
    });
    
    $(window).scroll(function(){
        if((window.pageYOffset)<387){
            var scrolled = window.pageYOffset;
            console.log(scrolled);
            $('.otherworks').css('position',"relative");
            $('.callme').css('position',"relative");
            $('.otherworks').css('marginTop',"0px");
            $('.callme').css('marginTop',"0px");
        }
        if(((window.pageYOffset)>387)&((window.pageYOffset)<387*2)){
            var scrolled = window.pageYOffset;
            console.log(scrolled);
            $('.otherworks').css('position',"fixed");
            $('.otherworks').css('marginTop',"-387px");
            $('.callme').css('position',"relative");
            $('.callme').css('marginTop',"387px");
            $('.zamer').css('marginTop',"0px");
        }
        if((window.pageYOffset)>=387*2){
            var scrolled = window.pageYOffset;
            console.log(scrolled);
            $('.callme').css('position',"fixed");
            $('.callme').css('marginTop',"-387px");
            $('.zamer').css('marginTop',"774px");
        }
    })
    
    
});

//parall.style.backgroundPosition="0px "+-scrolled/7+"px";