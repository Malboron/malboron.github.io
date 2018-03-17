
onmousemove = function(){
    var matheven1=-(event.clientX-window.innerWidth/2)/16;
    var matheven2=-(event.clientX-window.innerWidth/2)/8;
    var matheven3=-(event.clientX-window.innerWidth/2);
    var matheven4=-(event.clientX-window.innerWidth/2)/10;
    fon1.style.backgroundPosition=matheven1+"px 0px";
    fon3.style.backgroundPosition=matheven2+"px 0px";
 console.log(matheven1);
    block3d.style.transform="rotateY("+matheven4/2+"deg)";

}

var a=document.getElementById('tele');
var  swich=true;

a.onclick = function(){
    
    telshadow.style.visibility="visible";
    if(swich==true){
        callme.style.marginLeft="0px";
        callme.style.transition="1s ease-out 0s";
        telshadow.style.visibility="visible";
        swich=false;
        var audio = new Audio();
        audio.src = 'images/kek.mp3';
        audio.autoplay = true;
    }
    else{
        telshadow.style.visibility="hidden";
        callme.style.marginLeft="-200px";
        callme.style.transition="1s ease-out 0s";
        swich=true;
    }
}

NO.onmouseover = function(){
    var audio2 = new Audio();
    audio2.src = 'images/aaa.mp3';
    audio2.autoplay = true;
    NO.style.backgroundColor="red";
    NO.style.marginTop="10px";
    NO.style.height="100%";
}

NO.onmouseout = function(){
    var audio3 = new Audio();
    audio3.src = 'images/fuh.mp3';
    audio3.autoplay = true;
    NO.style.backgroundColor="#17171700";
    NO.style.marginTop="390px";
    NO.style.height="300px";
}