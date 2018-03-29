window.onscroll = function() {
    var scrolled = window.pageYOffset;
    parall.style.backgroundPosition="0px "+-scrolled/7+"px";
    block.style.backgroundPosition="0px "+"-"+scrolled+"px";
}



window.onload =function(){
    
}

callb.onclick = function(){
   alert("В разработке..."); 
}

$(document).ready(function(){
    $("#b1").click(function(){
        $("html").animate({
        scrollTop: "400px"
        }, 500 );
    });
    
    $("#b2").click(function(){
        $("html").animate({
        scrollTop: "800px"
        }, 500 );
    });
    
    $("#b3").click(function(){
        $("html").animate({
        scrollTop: "1200px"
        }, 500 );
    });
});