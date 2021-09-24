"use strict";


// 🍀let

// 🍀const
const finishElem = document.querySelector('.finish');
const creditElem = document.querySelector('.credit');
const cancelElem = document.querySelector('.cancel');
const returnElem = document.querySelector('.return');

const page1Elem = document.querySelector('.page1');
const page2Elem = document.querySelector('.page2');
const page3Elem = document.querySelector('.page3');

const notificationElem = document.querySelector('.notification');


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


window.addEventListener('load',()=>{
    setTimeout(() => {
        notificationElem.style.display = "none";
    }, 5000);
});





