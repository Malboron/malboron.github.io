window.onscroll = function() {
    var scrolled = window.pageYOffset;
    parall.style.marginTop=scrolled*0.000001111+"px";
    block.style.marginTop="-"+scrolled*0.5+"px";
}

zvonok = function(){
   alert("Спасибо!"); 
}