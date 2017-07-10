 // Author: Tyler Jacox
 // Date:   7/9/2017
 //
 //   Filename: reporttxt.js


 window.onload = function() {
     initPage();
 };

 //    Initializes the contents of the Web page
 function initPage() {
     var dataFields = [];
     var elements = document.getElementsByClassName("expenseEntry");

     for (i = 0; i < elements.length; i++) {

         dataFields[i] = elements[i];
         dataFields[i].addEventListener("blur", update);
     }
     document.forms[0].onsubmit = validateForm;
 }

 //    Tests a field for its length
 function testLength(a) {
     if (a.value.length == 0) {
         a.style.backgroundColor = "yellow";
         return false;
     } else {
         a.style.backgroundColor = "white";
         return true;
     }
 }

 //    Tests a field for its pattern
 function testPattern(field, regx) {

     if (!regx.test(field.value)) {
         field.style.backgroundColor = "yellow";
         field.style.color = "red";


         return false;
     } else {
         field.style.backgroundColor = "white";
         field.style.color = "black";

         return true;
     }
 }

 //    Validates a Web form
 function validateForm() {
     //alert("validateCalled" + document.forms[0].lname);
     var isValid = true;

     if (testLength(document.forms[0].lname) == false) {
         "I hope you know your last name..."
         isValid = false;
     } else if (testLength(document.forms[0].fname) == false) {
         alert("Dont you know your first name?");
         isValid = false;
     } else if (testLength(document.forms[0].address) == false) {
         alert("Summary is a required field");
         isValid = false;
     } else if (testLength(document.forms[0].summary) == false) {
         alert("Summary is a required field");
         isValid = false;
     } else if (testPattern(document.forms[0].account, /^ACT[0-9]{6}$/) == false) {
         alert("Account format was not valid.Ex ACT123456");
         isValid = false;
     } else if (testPattern(document.forms[0].department, /^DEPT[0-9]{3}$/) == false) {
         alert("Department format was not valid.Ex DEPT123");
         isValid = false;
     } else if (testPattern(document.forms[0].project, /^PROJ[0-9]{5}$/) == false) {
         alert("Project format was not valid.PROJ12345");
         isValid = false;
     } else if (testPattern(document.forms[0].ssn, /^[0-9]{3}-[0-9]{2}-[0-9]{4}$|[0-9]{9}$/) == false) {
         alert("The SSN you entered was not formatted correctly.Ex nnn-nn-nnnn 123-45-6789");
         isValid = false;
     } else if (isValid == false) {
         alert("Please fill out all required fields in the proper format....life isnt fair");
         return false;
     }
     return isValid;
 }

 //    Calculates the costs within one row of the travel report
 function calcRow(row) {
     var travel = parseFloat(document.forms[0].elements["travel" + row].value);
     var lodge = parseFloat(document.forms[0].elements["lodge" + row].value);
     var meal = parseFloat(document.forms[0].elements["meal" + row].value);
     return (travel + lodge + meal);
 }

 //    Calculates the costs within one row of the travel report
 function calcTotal() {
     var totalExp = 0;

     for (i = 1; i <= 4; i++) {
         totalExp += calcRow(i);
     }
     return totalExp;
 }

 //    Updates the total travel cost
 function update() {
     var numRegExp = /^\d*(\.\d{0,2})?$/;
     if (numRegExp.test(this.value)) {
         this.value = parseFloat(this.value).toFixed(2);
         for (i = 1; i <= 4; i++) {
             document.forms[0].elements["sub" + i].value = calcRow(i).toFixed(2);
         }
         document.forms[0].elements["total"].value = calcTotal().toFixed(2);
     } else {
         alert("Invalid currency value.....just like monopoly");
         this.value = "0.00";
         this.focus();
     }
 }