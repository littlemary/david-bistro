"use strict";

document.addEventListener("DOMContentLoaded", ()=>{

    const box = document.querySelector(".touchbox");
    const message = document.querySelector("#message");
    box.addEventListener('touchstart', (e)=>{
      e.preventDefault();
      message.innerHTML = "Start touch";
    });
    box.addEventListener('touchmove', (e)=>{
      e.preventDefault();
      message.innerHTML = "Touch Move";
    });
    box.addEventListener('touchend', (e)=>{
      e.preventDefault();
      message.innerHTML = "End touch";
    });

})
