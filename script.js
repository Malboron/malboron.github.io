window.onscroll = function() {
    var scrolled = window.pageYOffset;
    parall.style.marginTop=scrolled*0.001111+"px";
    block.style.marginTop="-"+scrolled+"px";
}
