var btntranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#txt-input");
var outputdiv=document.querySelector("#output");
 

 function clickHandler() {
    outputdiv.innerText = "translated: " +textInput.value;
 };

 btntranslate.addEventListener("click", clickHandler)