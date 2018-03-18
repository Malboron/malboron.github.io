window.onscroll = function() {
    var scrolled = window.pageYOffset;
    parall.style.backgroundPosition="0px "+-scrolled/7+"px";
    block.style.backgroundPosition="0px "+"-"+scrolled+"px";
}

var winwid=document.documentElement.clientWidth;

window.onload =function(){
    
}

callb = function(){
   alert("В разработке..."); 
}

