let btnTranslate = document.querySelector("#btn-translate");
let textInput = document.querySelector("#ip-txt");
let textOutput = document.querySelector("#op-txt");

let serverURL = "https://api.funtranslations.com/translate/groot.json";


function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text;
}

function errorHandler() {
    console.log("Error occured");
}

function clickHandler() {
    let inputText = textInput.value;

    //calling the server
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => textOutput.innerText = json.contents.translated)
        .catch(errorHandler);
};

btnTranslate.addEventListener("click", clickHandler);