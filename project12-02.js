"use strict";
/*    JavaScript 7th Edition
      Chapter 12
      Project 12-02

      Project to convert between celsius and fahrenheit
      Author: Jose Villa
      Date:   5/7/2025

      Filename: project12-02.js
*/

// using jQuery
$(function(){
      $("input#cValue").change(function(e){
            let celsuis = $(e.target).val();
            let fahrenheit = celsuis*1.8 + 32;

            $("input#fValue").val(fahrenheit.toFixed(0))
      })

      $("input#fValue").change(function(e){
            let fahrenheit = $(e.target).val();
            let celsuis = (fahrenheit-32)/1.8;

            $("input#cValue").val(celsuis.toFixed(0))
      })
})
// using regular javascript

// document.querySelector("input#cValue").onchange = function(e){
//       let celsuis = (e.target).value;
//       let fahrenheit = celsuis*1.8 + 32;

//       document.querySelector("input#fValue").value(fahrenheit.toFixed(0))
// }

// document.querySelector("input#fValue").onchange = function(e){
//       let fahrenheit = (e.target).value;
//       let celsuis = (fahrenheit-32)/1.8;


//       document.querySelector("input#cValue").value(celsuis.toFixed(0))
// }