console.log("my name is rupesh gupta");

var btnTranslate = document.querySelector("#btn-translate");

var btnReset = document.querySelector("#btn-reset");

var txtInput = document.querySelector("#input-textarea");

var outoutText = document.querySelector("#output-textarea");

// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

var serverURL = "https://api.funtranslations.com/translate/minion.json"


function getTranslationURL(input) {
    return serverURL + "?" + "text=" + input
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with server! try again after some time")
}


function clickHandler() {
    var inputText = txtInput.value; // taking input

    // calling server for processing
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outoutText.innerText = translatedText; // output
        })
        .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler)

btnReset.addEventListener("click", () => {
    txtInput.value = "";
    outoutText.value = "";
});