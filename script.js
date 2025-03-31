const texts=["晴空一鹤排云上","便引诗情到云霄","八百里分麾下炙","五十弦翻塞外声"];
const images=["background.png","dog.jpg","women.jpg"];
let index1=1;
let index2=0;
function changeText(){
    if(index1>=texts.length){
        index1=0;
    }
    let ele=document.getElementsByClassName('two')[0];
    ele.classList.add('fade-in');
    setTimeout(()=>{   
        ele.classList.remove('fade-in');
        ele.classList.add('fade-out');
        
        setTimeout(()=>{
            ele.innerText=texts[index1];
            ele.classList.remove('fade-out');
            index1++;
            setTimeout(changeText,1000);//动画间隔时间
        },500);//淡出时间
    },800);//淡入时间
}
changeText();

function changeImage(){
    if(index2>=images.length){
        index2=0;
    }
    let imgContainers = document.getElementsByClassName('img');
    let imgList = [];
    // 从每个 div 中获取 img 标签
    //直接选择tagname也不行，因为foreach只支持用array类型的数列，直接选择返回的是HTMLCollection对象，还需要用for循环转换
    for (let i = 0; i < 5 && i < imgContainers.length; i++) {
        let img = imgContainers[i].getElementsByTagName('img')[0];   
        if (img) {
            imgList.push(img);
        }
    }
    // imgList.forEach(i=>console.log(i));
    imgList.forEach(img=>img.classList.add('fade-in'));//forEach循环，对列表内每个元素执行淡出动画
    setTimeout(()=>{
        imgList.forEach(img=>img.classList.remove('fade-in'));//淡出动画结束后，对列表内每个元素执行淡入动画
        imgList.forEach(img=>img.classList.add('fade-out'));
        setTimeout(()=>{
            imgList.forEach(img=>img.classList.remove('fade-out'));//淡入动画结束后，对列表内每个元素执行淡出动画
            imgList.forEach(img=>img.src=images[index2]);
            index2++;
            setTimeout(changeImage,1000);//动画间隔时间
        },500);//淡出时间
    },800);//淡入时间
}
changeImage();



