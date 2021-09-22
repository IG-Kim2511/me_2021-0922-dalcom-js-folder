"use strict";
/* 
🦄🚀 🍄🍉 🐞🌊  ⚡👻🐳  
⚽🏓🎯 💊🩸🧲  📌    
👉👇👆⚾❌⭕ 
💋🌀🎈 🎃🎨⚽ 🏓🎯 💊🩸🧲 📌 🍓🍅🍈 🍀 🔥🍚 🍤⛄

🍀🍈🍓🎃 섹터 나눔 마크
🍉 js-6

🦄 point, 알아낸것
🚀 공식 (알고리즘 상위호환)
🍄Algorithm)  알고리즘 (코딩 순서, 소프트코딩)
📌⚡ 중요사항

🐞 bug
❓ question, bug

......🌊 다음에 할거

⚽ (hard-coding) (soft-coding)
💊 way-1 way-2 way-3
*/

/* test용 : body 백그라운드 컬러 - red */
document.querySelector('body').setAttribute('style', 'background-color:lightblue;');

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



/* 🦄 JS 문법 정리

🦄즉시함수
(function () {
  ~~~~~
})();


🦄constructor / prototype
function Card(num, color) {
    this.num = num;
    this.color = color;
    this.init();
}

Card.prototype = {
    constructor: Card,
    init: function() {
        const mainElem = document.createElement('div');
        mainElem.style.color = this.color;
        mainElem.innerHTML = this.num;
        mainElem.classList.add('card');
        document.body.appendChild(mainElem);
    }
};

const card1 = new Card(1, 'green');
const card2 = new Card(7, 'blue');



🦄 class

class Character_c {
    constructor(a_num){
        this.mainElem = document.createElement("div");
        this.mainElem.classList.add('character');
        this.mainElem.innerHTML =`
            <img src="./img/poke(${a_num}).png" alt="">
        `;
        stageElem.appendChild(this.mainElem);
    }
    sayHi(){
        console.log('prototype')
    }
}

btnC.addEventListener('click',()=>{
    let ig = new Character_c(num);  
});


🦄 class (2)
class Note {
  constructor(a, b) {
    this.title = a;
    this.body = b;
    this.id = Math.floor(Math.random() * 1000);
    console.log(this.id);
  }
}

let newNote = new Note(11, 22);
let newNote2 = new Note(1, 2);
*/


/* <🍄알고리즘>

<🍄createElement> - "🚀 cia"

  let div = document.createElement('div');
  div.className = "alert";
  div.innerHTML = `~~~~`;          
  document.body.append(div);

  
<🍄 0~1의 값을 구하는 공식>

0. 0~1의 값을 구하는 공식 만들어서 그 값을 활용하기
1. 계속 바뀌는 값 / 고정된 값 =  0~1의 값을 구해냄 
2. 그 값을 translateZ, style.width에 사용함

🚀드림코딩
let homeHeight = home.getBoundingClientRect().height;
homeAvatar.style.opacity = 1 - window.scrollY / homeHeight;

🚀1분코딩
let maxScroll = document.body.offsetHeight - window.innerHeight;
const scrollPer= pageYOffset/ maxScroll;


<🚀> "gps io"
(계속 바뀌는 값 / 고정된 값 =  0~1의 값)

1. 계속 바뀌는 값
getBoundingClientRect().top;
pageYOffset
window.scrollY

2. 고정값
innerHeight 
offsetTop



<🍄게임 만들기 , n++>

  let n = 0;  
  btn.addEventListener("click", function () {
          n++;  
          number.innerHTML=`${n}`;
        
          if (n > 20) {
              실행하고싶은 함수코딩
        }
      });

    
<🍄e.target마우스 클릭위치 사용>

function(e){  
const mousePos = { x: 0, y: 0 };

mousePos.x = -1 + (e.clientX / window.innerWidth) * 2;
mousePos.y = 1 - (e.clientY / window.innerHeight) * 2;

~.style.transform = `rotateX(${mousePos.y*5}deg) rotateY(${mousePos.x*5}deg)`;
}


<  🚀암기공식 : 마우스 위치값잡는 계산식 (암기) 자주 쓰임 >
  가운데 수치가 0으로 만드는게 포인트
  left, bottom일수록 -1,
  right,top일수록 +1로 설정됨        


  
  let mousePosition={x:0,y:0};  

  window.addEventListener('mousemove',(e)=>{    
  
      mousePosition.x =(e.clientX /  window.innerWidth *5)-2.5; 🚀
      mousePosition.y =e.clientY/ window.innerWidth *5;
      
      stageElem.style.transform = `rotateX(${ mousePosition.y }deg) rotateY(${mousePosition.x}deg)`;

  });
*/


/* 🚀JS 수학 공식 정리
*/


// 🍀const : 기본 element

const todoContainer = document.querySelector('.todo_container');
const inputBox = document.querySelector('.input_box');
const submitBtn = document.querySelector('.submit');

let windowsContainer = document.querySelector('.windows_container');
let covidWindow = document.querySelector('.covid_window');

//  🍀let : 선언하고, 밑에서 알고리즘 코딩

let number;
let n = 0;
let position = {x:0, y:0};



// 🍀function : 바로위에서 call (까먹지 않게...)

keiventure();
function keiventure() {
}


// 🍀 event Listeners
submitBtn.addEventListener('click', init);

submitBtn.addEventListener('keypress', (e) => {
  if (e.key === 'enter') {
    init;
  }
})

function init() {
  a_handler();
  b_handler(); 
}

//🍀 functions 
function a_handler() {
}
function b_handler() {  
}


//  C 58 . JS 58

// 🍀 API
// /covid-19/counties
let url_usa = 'https://disease.sh/v3/covid-19/jhucsse/counties';
let url_historical = 'https://disease.sh/v3/covid-19/historical/us?lastdays=500';


//🍀 axios 

function mynaming() {

  axios.get(url_usa)
    .then(function (response) {
      // handle success   
      console.log(response)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
}

mynaming();


//🍀 axios /  rapidApi 사용하기

function covidStates() {

  const options = {
    method: 'GET',
    url: 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/covid-ovid-data/sixmonth/USA',
    headers: {
      'x-rapidapi-key': api.rapidApiKey,    //config안의 rapid api key를 변수로 가져옴
      'x-rapidapi-host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
    }
  };

  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });


}
covidStates();



