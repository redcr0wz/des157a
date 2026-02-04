(function () {
    "use strict";
    console.log("reading js");

    // TAG CODE
    const body = document.querySelector('body');
    const notebook = document.querySelector('.notebook');
    const form = document.querySelector('form');
    const lyrics = document.querySelector('#lyrics');
    const myForm = document.querySelector('#myform');
    const madlib = document.querySelector('#madlib');
    const formData = document.querySelectorAll("input[type=text]");

    myForm.addEventListener('submit', function (event) {
        event.preventDefault();
        processFormData(formData);
    });

    function processFormData(formData) {
        const words = [];
        const emptyFields = [];
        let counter = 0;

        for (const eachWord of formData) {
            if (eachWord.value) {
                words.push(eachWord.value);
            } else {
                emptyFields.push(counter);
            }
            counter++;
        }
        if (emptyFields.length > 0) {
            showErrors(formData, emptyFields);
        } else {
            makeMadlib(words);
        }
    }

    function showErrors(formData, emptyFields) {
        const errorID = formData[emptyFields[0]].id;
        const errorText = `Please fill out this field ${errorID}`;
        madlib.innerHTML = errorText;
        document.querySelector(`#${errorID}`).focus();
    }

    function makeMadlib(words) {
        const myText = `Here are the words: ${words[0]}, ${words[1]}, ${words[2]}, and ${words[3]}`;
        madlib.innerHTML = myText;
        for (const eachField of formData) {
            eachField.value = '';
        }
    }

    function makeMadlib(words) {
        const lyricsText = `<h2><span>${beforeWord}</span></h2> 
                            <h3>BY THE <span>${pluralNoun}</span></h3>
                            <p>IN THE DEPTHS OF <span>${place}</span></p>
                            <p><span>${verb}</span> IN SILENCE</p>
                            <p>COMES A DEADLY <span>${animal}</span></p>
                            <p>LIKE <span>${tragicEvent}</span> REBORN</p>
                            <p>NOW HUMANITY BRINGS <br><span>${negativeEmotion}</span></p>
                            <p><span>${vulgarExclamation}</span>!</p>
                            <p>EVERY <span>${timePeriod}</span></p>
                            <p>TO BRING <span>${somethingScary}</span></p>`;
        lyrics.innerHTML = lyricsText;
    }

})();