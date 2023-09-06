/* var btntranslate = document.querySelector("#btn-translate");
btntranslate.addEventListener(function clickEventHandler() {
   console.log('Clicked')
}
*/

var inputBtn = document.querySelector("#input-btn");
var textInput = document.querySelector("#txt-input");
var outputdiv=document.querySelector("#output");
 
//console.log(outputdiv)

 function clickHandler() {
    outputdiv.innerText = textInput.value;
    
 };

 inputBtn.addEventListener("click", clickHandler);