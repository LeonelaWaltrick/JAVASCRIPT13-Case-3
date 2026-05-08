"use strict";
/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Case Problem 3


   Filename: mas_reg2.js

   Author:  Leonela Waltrick
   Date:    05/07/2026


   Function List
   =============
      
   writeSessionValues()
      Writes data values from session storage in to the
      registration summary form


*/

function writeSessionValues() {
  document.getElementById("regName").textContent = sessionStorage.confName || "";
  document.getElementById("regGroup").textContent = sessionStorage.confGroup || "";
  document.getElementById("regEmail").textContent = sessionStorage.confMail || "";
  document.getElementById("regPhone").textContent = sessionStorage.confPhone || "";
  document.getElementById("regSession").textContent = sessionStorage.confSession || "";
  document.getElementById("regBanquet").textContent = sessionStorage.confBanquet || "";
  document.getElementById("regPack").textContent = sessionStorage.confPack || "";

  var total = sessionStorage.confTotal || 0;
  document.getElementById("regTotal").textContent = "$" + total;
}

window.addEventListener("load", writeSessionValues);



