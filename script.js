window.onscroll = function() {
    var scrolled = window.pageYOffset;
    parall.style.marginTop=scrolled*1.2-200+"px";
    block.style.marginTop="-"+scrolled+"px";
}