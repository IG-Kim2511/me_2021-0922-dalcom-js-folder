"use strict";


/* 
🍀c2, JS 썼던것들 정리
(~ 뜻 : 변수, 오브젝트)

animationend, animationstart, animationiteration


🍀createElement

classlist.appendChild(document)
classlist.add
classlist.remove
classlist.toggle

.contains()
.closest()

createTextNode

~.dataset (html : data-name="#home" , JS : ~.dataset.name;)

e.preventDefault()
e.clientX, e.clientY
elapsedTime, propertyName

.focus() : open했을때 input에 커서가 깜빡이면서 이미 타이핑할 준비가 되어있음


🍀(about Height)
getBoundingClientRect().top;
pageYOffset
window.scrollY

innerHeight 
offsetTop
offsetHeight


innerHTML =
insertAdjacentHTML
insertAdjacentText
insertAdjacentElement

localStorage.setItem(~,~);
localStorage.getItem()

location.reload();  새로고침

🍀load
load – DOM 트리를 만드는 게 완성+ 이미지등등 모두 불러오는 것이 끝났을 때 발생
DOMContentLoaded – 브라우저가 HTML을 전부 읽고 DOM 트리를 완성하는 즉시 발생
unload / beforeunload  – 사용자가 페이지를 떠날 때 발생
resize

Math.floor(Math.random()*1000);

node : parentNode, childNode, removeChild, appendChild, nodeName


reset()

requestAnimationFrame / cancelAnimationFrame

.scrollTop
.scrollintoView
.scrollY

.scrollBy :  (코딩용... 자동으로 가장 밑으로 스크롤시키기) window.scrollBy(0, window.innerHeight);

setAttribute('style','color:red')
~.setAttribute('data-id,123)  /  ~.getAttribute('data-id)

🍀
setTimeout /  clearTimeout 
setInterval /  clearInterval 
requestAnimationFrame  / cancelAnimationFrame

substring

🍀
~.style.width =`${~*100}%`;  
~.style.transform = `rotateX(${mousePos.y*5}deg) rotateY(${mousePos.x*5}deg)`;

.test()
textContent, textHTML
toggle
trim()

transitionend transitionstart

🍀todolist공식
let div = document.createElement('div');
div.className = "alert";
div.innerHTML = "~~~";
document.body.append(div);

.value
*/

// 🍀let

// 🍀const
const finishElem = document.querySelector('.finish');
const creditElem = document.querySelector('.credit');
const cancelElem = document.querySelector('.cancel');
const returnElem = document.querySelector('.return');

const page1Elem = document.querySelector('.page1');
const page2Elem = document.querySelector('.page2');
const page3Elem = document.querySelector('.page3');

// 🍀event

finishElem.addEventListener('click',()=>{
    page2Elem.classList.add('change');
});

creditElem.addEventListener('click',()=>{
    page3Elem.classList.add('change');
});

returnElem.addEventListener('click',()=>{
    page2Elem.classList.remove('change');
    
});

cancelElem.addEventListener('click',()=>{
   
    page3Elem.classList.remove('change');
});






