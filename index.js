// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const body = document.querySelector("body");
const h1 = document.querySelector("h1");
const backColors = ["#1abc9c", "#e74c3c", "#f1c40f"];

//const width = window.innerWidth;

h1.style.color = "white";

function KH() {
  const width = window.innerWidth;
  if (window.innerWidth < 500) {
    body.style.backgroundColor = backColors[0];
  } else if (window.innerWidth >= 500 && width <= 800) {
    body.style.backgroundColor = backColors[1];
  } else {
    body.style.backgroundColor = backColors[2];
  }
}

window.addEventListener("resize", KH);


/* 바닐라JS 2주차 const title = document.querySelector("#title");
const superEventHandler = {
    mouseEnter: function(){
        title   .innerHTML = "The mouse is here!";
        title.style.color = "blue";
    },
    mouseLeave: function(){
        title.innerHTML = "The mouse is gone!";
        title.style.color = "red";
    },
    resize: function(){
        title.innerHTML = "You just resized!!";
        title.style.color = "green";
    },
    rightclick: function(){
        title.innerHTML = "That was a right click!";
        title.style.color = "purple";
    }
};


title.addEventListener("mouseenter", superEventHandler.mouseEnter);
title.addEventListener("mouseleave", superEventHandler.mouseLeave);
window.addEventListener("resize", superEventHandler.resize);
window.addEventListener("contextmenu", superEventHandler.rightclick);*/