var textInput = document.querySelector("text-input");

var buttonTranslate = document.querySelector("#button-Translate");

var outputDiv = document.querySelector("#output");

// server integration
var serverURL = "https://api.funtranslations.com/translate/minion.json"


// function

function getTranslationURL(input) {
    return serverURL + "?" + "text" + input;

}

//function to handle error

function errrorHandler(error) {
    console.log("error occured", error)
    alert("something wrong with server! try again after some time")
}

function clickHandler() {
    var enteredText = textInput.value // Taking / Entering input

    //calling server for processing
    fetch(getTranslationURL(enteredText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText; //output
        })
        .catch(errrorHandler)
};

//adding event on button
buttonTranslate.addEventListener("click", clickHandler)