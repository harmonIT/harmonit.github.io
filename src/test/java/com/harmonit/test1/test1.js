window.onload=function () {
    var div3=document.getElementsByClassName("box3")[0];

    div3.onmouseover = function(){

        startMove(100);
    }
    div3.onmouseout = function(){
        startMove(0);
    }

    var alpha = 0;
    var timer = null;
    var startMove = function(iTarget){
        clearInterval(timer);
        var speed = 0;
        if(iTarget > alpha){
            speed = 5;
        }else {
            speed = -5;
        }
        timer = setInterval(function(){
            if(alpha == iTarget){
                clearInterval(timer);
            }else {
                alpha += speed;
                div3.style.filter = 'alpha(opacity='+ alpha + ')';
                div3.style.opacity = alpha/100;
            }
        },30);
    }
}