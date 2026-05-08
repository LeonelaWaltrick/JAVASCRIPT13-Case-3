"use strict";
/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Case Problem 3


   Filename: mas_register.js

   Author:  Leonela Waltrick
   Date:    05/07/2026
   
   Function List
   =============
   
   formTest()
      Performs a validation test on the selection of the conference
      session package and the conference discount number
   
   calcCart()
      Calculates the cost of the registration and saves data
      in session storage
      
   writeSessionValues()
      Writes data values from session storage in to the
      registration summary form
*/

window.addEventListener("load" , function () {

   //calculate cart once load
   calcCart();

   //regSubmit butoon - run sessionTest9) on click
   document.getElementById("regSubmit").onclick = sessionTest;

   //onblur handlers for text fields
   document.getElementById("fnBox").onblur = calcCart;
   document.getElementById("lnBox").onblur = calcCart;
   document.getElementById("groupBox").onblur = calcCart;
   document.getElementById("mailBox").onblur = calcCart;
   document.getElementById("phoneBox").onblur = calcCart;
   document.getElementById("banquetBox").onblur = calcCart;


   // onchange for sessionBox
   document.getElementById("sessionBox").onchange = calcCart;

   // onclick for mediaCB
   document.getElementById("mediaCB").onclick = calcCart;
});

function sessionTest() {
var sessionList = document.getElementById("sessionBox");

if (sessionList.selectedIndex === -1) {
   sessionList.setCustomValidity("Select a Session Package");
} else { 
   sessionList.setCustomValidity("");
}
}

function calcCart() {
   var form = document.forms.regForm;

   // confName = "firstName lastName"
   var firstName = form.firstName.value;
   var lastName = form.lastName.value;
   sessionStorage.confName = firstName + " " + lastName;

   // group, email, phone, banquet guest
   sessionStorage.confGroup = form.group.value;
   sessionStorage.confEmail = form.email.value;
   sessionStorage.confPhone = form.phoneNumber.value;
   sessionStorage.confBanquet = form.banquetGuests.value;
}

  var banquetGuests = parseInt(form.banquetGuests.value || "0", 10);
  sessionStorage.confBanquetCost = banquetGuests * 55;

    var sessionList = document.getElementById("sessionBox");

  if (sessionList.selectedIndex !== -1) {
    var selectedOption = sessionList.options[sessionList.selectedIndex];
    sessionStorage.confSession = selectedOption.text;
    sessionStorage.confSessionCost = selectedOption.value;
  } else {
    sessionStorage.confSession = "";
    sessionStorage.confSessionCost = 0;
  }
  var mediaCheck = document.getElementById("mediaCB");

  if (mediaCheck.checked) {
    sessionStorage.confPack = "yes";
    sessionStorage.confPackCost = 115;
  } else {
    sessionStorage.confPack = "no";
    sessionStorage.confPackCost = 0;
  }

    var sessionCost = parseFloat(sessionStorage.confSessionCost || "0");
  var banquetCost = parseFloat(sessionStorage.confBanquetCost || "0");
  var packCost = parseFloat(sessionStorage.confPackCost || "0");

  sessionStorage.confTotal = sessionCost + banquetCost + packCost;

    writeSessionValues();

    function calcCart() {
  var form = document.forms.regForm;

  var firstName = form.firstName.value;
  var lastName = form.lastName.value;
  sessionStorage.confName = firstName + " " + lastName;

  sessionStorage.confGroup = form.group.value;
  sessionStorage.confMail = form.email.value;
  sessionStorage.confPhone = form.phoneNumber.value;
  sessionStorage.confBanquet = form.banquetGuests.value;

  var banquetGuests = parseInt(form.banquetGuests.value || "0", 10);
  sessionStorage.confBanquetCost = banquetGuests * 55;

  var sessionList = document.getElementById("sessionBox");
  if (sessionList.selectedIndex !== -1) {
    var selectedOption = sessionList.options[sessionList.selectedIndex];
    sessionStorage.confSession = selectedOption.text;
    sessionStorage.confSessionCost = selectedOption.value;
  } else {
    sessionStorage.confSession = "";
    sessionStorage.confSessionCost = 0;
  }

  var mediaCheck = document.getElementById("mediaCB");
  if (mediaCheck.checked) {
    sessionStorage.confPack = "yes";
    sessionStorage.confPackCost = 115;
  } else {
    sessionStorage.confPack = "no";
    sessionStorage.confPackCost = 0;
  }

  var sessionCost = parseFloat(sessionStorage.confSessionCost || "0");
  var banquetCost = parseFloat(sessionStorage.confBanquetCost || "0");
  var packCost = parseFloat(sessionStorage.confPackCost || "0");

  sessionStorage.confTotal = sessionCost + banquetCost + packCost;

  writeSessionValues();
}

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


