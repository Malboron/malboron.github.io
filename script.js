window.onscroll = function() {
    var scrolled = window.pageYOffset;
    parall.style.backgroundPosition="0px "+scrolled+"px";
    block.style.backgroundPosition="0px "+"-"+scrolled+"px";
}

var winwid=document.documentElement.clientWidth;

window.onload =function(){
    if(winwid<1000)
    {
        document.getElementById('textheader').style.display="none";
        document.getElementById('zakazat_zvonok').style.marginLeft="33%";
    }
}

zvonok = function(){
   alert("В разработке..."); 
}