const texts=["晴空一鹤排云上","便引诗情到云霄","八百里分麾下炙","五十弦翻塞外声"];
//javascript语中三个函数同时调用一个列表会报错
const images1=["background.png","dog.jpg","women.jpg"];
const images2=["background.png","dog.jpg","women.jpg"];
const images3=["background.png","dog.jpg","women.jpg"];
const images4=["background.png","dog.jpg","women.jpg"];
const images5=["background.png","dog.jpg","women.jpg"];
let index=0;
let index1=1;
let index2=1;
let index3=1;
let index4=1;
let index5=1;
function changeText1(){
    if(index>=texts.length){
        index=0;
    }
    let ele=document.getElementsByClassName('two')[0];
    ele.classList.add('fade-in');
    setTimeout(()=>{   
        ele.classList.remove('fade-in');
        ele.classList.add('fade-out');
        setTimeout(()=>{
            ele.classList.remove('fade-out');
            ele.innerHTML=texts[index];
            index++;
            setTimeout(changeText1,500);
        },2000);
    },2000);
}
changeText1();

function changeImage1(){
    if(index1>=images1.length){
        index1=0;
    }
    if(index2>=images2.length){
        index2=0;
    }
    if(index3>=images3.length){
        index3=0;
    }
    if(index4>=images4.length){
        index4=0;
    }
    if(index5>=images5.length){
        index5=0;
    }
    let img1=document.getElementsByClassName('img1')[0].getElementsByTagName('img')[0];
    let img2=document.getElementsByClassName('img2')[0].getElementsByTagName('img')[0];
    let img3=document.getElementsByClassName('img3')[0].getElementsByTagName('img')[0];
    let img4=document.getElementsByClassName('img4')[0].getElementsByTagName('img')[0];
    let img5=document.getElementsByClassName('img5')[0].getElementsByTagName('img')[0];
    // console.log(img1,typeof img1);
    img1.classList.add('fade-in');
    img4.classList.add('fade-in');
    setTimeout(() => {img2.classList.add('fade-in')}, 500);
    setTimeout(() => {
        img3.classList.add('fade-in')
        img5.classList.add('fade-in')
    }, 1000);
    setTimeout(() => {
        img1.classList.remove('fade-in');
        img1.classList.add('fade-out');
        img4.classList.remove('fade-in');
        img4.classList.add('fade-out');
        setTimeout(() => {
            img2.classList.remove('fade-in');
            img2.classList.add('fade-out')
        }, 500);
        setTimeout(() => {
            img3.classList.remove('fade-in');
            img3.classList.add('fade-out')
            img5.classList.remove('fade-in');
            img5.classList.add('fade-out')
        }, 1000);
        setTimeout(() => {
            img1.classList.remove('fade-out');
            img2.classList.remove('fade-out');
            img4.classList.remove('fade-out');
            img3.classList.remove('fade-out');
            img5.classList.remove('fade-out');
            img1.src=images1[index1];
            img2.src=images2[index2];
            img4.src=images4[index4];
            img3.src=images3[index3];
            img5.src=images5[index5];
            index1++;
            index2++;
            index4++;
            index3++;
            index5++;
            setTimeout(changeImage1, 500);          
        }, 2000);
    },2000);
}
changeImage1();
/*
function changeImage2(){
    if(index2>=images.length){
        index2=0;
    }
    let img2=document.getElementsByClassName('img2')[0].getElementsByTagName('img')[0];
    // console.log(img1,typeof img1);
    img2.classList.add('fade-in');
    setTimeout(() => {
        img2.classList.remove('fade-in');
        img2.classList.add('fade-out');
        setTimeout(() => {
            img2.classList.remove('fade-out');
            img2.src=images[index2];
            index2++;
            setTimeout(changeImage2, 1000);
        }, 1000);
    },1000);
}
changeImage2();
*/


/*
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
*/


