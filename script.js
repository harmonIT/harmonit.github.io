const texts=["晴空一鹤排云上","便引诗情到云霄","八百里分麾下炙","五十弦翻塞外声"];
let index=1;
function changeText(){
    if(index>=texts.length){
        index=0;
    }
    let ele=document.getElementsByClassName('two')[0];
    ele.classList.add('fade-in');
    setTimeout(()=>{   
        ele.classList.remove('fade-in');
        ele.classList.add('fade-out');
        
        setTimeout(()=>{
            ele.innerText=texts[index];
            ele.classList.remove('fade-out');
            index++;
            setTimeout(changeText,0);//动画间隔时间
        },1000);//淡出时间
    },2000);//淡入时间
}

changeText();
    
