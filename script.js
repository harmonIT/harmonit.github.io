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

// 获取所有的 content 页面
const contents = document.querySelectorAll('.content');
// 当前页面索引
let currentPageIndex = 0;
window.addEventListener('wheel', function(event) {
    let s = window.scrollY || document.documentElement.scrollTop;

    // 判断滚动方向并更新当前页面索引
    if (event.deltaY > 0) {
        // 向下滚动
        if (currentPageIndex < contents.length - 1) {
            currentPageIndex++;
        }
    } else {
        // 向上滚动
        if (currentPageIndex > 0) {
            currentPageIndex--;
        }
    }

    // 滚动到目标页面
    window.scrollTo({   
        top: (contents[currentPageIndex].offsetTop),
        behavior: 'smooth'
    });
}); 


