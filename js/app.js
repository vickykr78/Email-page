// variables
const sendBtn=document.getElementById('sendBtn'),
      email=document.getElementById('email'),
      subject=document.getElementById('subject'),
      message=document.getElementById('message'),
    resetButton=document.getElementById('resetBtn'),
    sendemailForm=document.getElementById('email-form');
 //event listeners
 
 eventListeners();

 function eventListeners(){
     document.addEventListener('DOMContentLoaded', appINit)
     email.addEventListener('blur', validateForm)
     subject.addEventListener('blur', validateForm)
     message.addEventListener('blur', validateForm)
     resetForm.addEventListener('submit', formReset)
 }
// functions
 function appINit (){
     sendBtn.disabled = true;
 }
 function validateForm(){
     console.log('form')
 }
 function resetBtn(){
     sendemailForm.reset(); 
 }