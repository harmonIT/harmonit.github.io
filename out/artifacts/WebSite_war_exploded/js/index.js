
/*window.onload=function () {
    var header = document.getElementsByClassName("header")[0];
    var content=document.getElementsByClassName("content")[0];
    //滚动条发生滚动给头部添加颜色
    window.onscroll=function () {
        var st = document.documentElement.scrollTop
        if (st>0){
            /!*startMove(100);*!/
            header.style.backgroundImage="linear-gradient(to right, #4cbf30 0%, #0f9d58 100%)"

        }else {
            header.style.backgroundImage="";
            /!*startMove(0);*!/
        }
    }*/

    //透明度渐变动画
    var timer = null;
    var alpha = 0;

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
                header.style.filter = 'alpha(opacity='+ alpha + ')';
                header.style.opacity = alpha/100;
            }
        },30);
    }

}


