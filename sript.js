"use strict";
/* To display dialog box and close when close button is pressed*/
let imglogo = document.querySelector(".img");
let dialog = document.querySelector(".dialog");
let clsdia = document.querySelector(".closedialog");
imglogo.addEventListener("click", () => {
  dialog.showModal();
});

clsdia.addEventListener("click", () => {
  dialog.close();
});
