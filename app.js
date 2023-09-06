/* var btntranslate = document.querySelector("#btn-translate");
btntranslate.addEventListener(function clickEventHandler() {
   console.log('Clicked')
}
*/
var btnTranslate = document.querySelector("#input-btn");
var textInput = document.querySelector("#txt-input");
var outputDiv=document.querySelector("#output");
 
//var serverURL = "https://predictor.yandex.net/suggest.json/complete"
//var serverURL = "https://api.funtranslations.com/translate/minion.json"
//var serverURL = "https://api.funtranslations.com/translate/pirate.json"
var serverURL = "https://api.funtranslations.com/translate/ferb-latin.json"

function getTranslationURL(input){
   return  serverURL + "?" + "text=" + input
}

function errorHandler(error) {
   console.log("error occured", error)
   alert("something went wrong please try again later")
}

 function clickHandler() {
   // outputdiv.innerText = textInput.value;

   var inputText = textInput.value; //taking input

   //calling server for processing
   fetch(getTranslationURL(inputText))
   .then(response => response.json())
   .then(json => {
      var translatedText = json.contents.translated;
      outputDiv.innerText = translatedText; //output
      
   })
   .catch(errorHandler)
    
 };

 btnTranslate.addEventListener("click", clickHandler);