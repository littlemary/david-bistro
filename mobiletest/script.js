"use strict";

document.addEventListener("DOMContentLoaded", ()=>{

    const box = document.querySelector(".touchbox");
    const message = document.querySelector("#message");
    box.addEventListener('touchstart', (e)=>{
      e.preventDefault();
      message.innerHTML = "Start touch";
    
    })

})
