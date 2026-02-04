(function () {
    "use strict";
    console.log("reading js");

    const form = document.querySelector('form');
    const sections = document.querySelectorAll('section');
    const beforeWordChoice = document.querySelector('#before-word');
    const lyrics = document.querySelector('#lyrics');
    const body = document.querySelector('body');
    const header = document.querySelector('header');
    const finalMadlib = document.querySelector('#final-madlib');

    // i swear to god ill simplify this i just need it to function

    document.querySelector('#next-1').addEventListener('click', function(e) {
        if (document.querySelector('#place').value == '') {
            document.querySelector('#place').focus;
        } else {
            e.preventDefault();
            const place = document.querySelector('#place').value;
            beforeWordChoice.innerHTML += `<option value="${place}">${place}</option>`;
            sections[0].className = "notebook moveLeft";
            sections[1].className = "notebook showing moveRight";
        }
    });

    document.querySelector('#back-1').addEventListener('click', function() {
        sections[1].className = "notebook moveLeft";
        sections[0].className = "notebook showing moveRight";
        header.className = "showing";
    });

    document.querySelector('#next-2').addEventListener('click', function(e) {
        if (document.querySelector('#verb').value == '') {
            document.querySelector('#verb').focus;
        } else {
            e.preventDefault();
            header.className = "hidden";
            const verb = document.querySelector('#verb').value;
            beforeWordChoice.innerHTML += `<option value="${verb}">${verb}</option>`;
            sections[1].className = "notebook moveLeft";
            sections[2].className = "notebook showing moveRight";
        }
    });

    document.querySelector('#back-2').addEventListener('click', function() {
        sections[2].className = "notebook moveLeft";
        sections[1].className = "notebook showing moveRight";
    });

    document.querySelector('#next-3').addEventListener('click', function(e) {
        if (document.querySelector('#animal').value == '') {
            document.querySelector('#animal').focus;
        } else {
            e.preventDefault();
            const animal = document.querySelector('#animal').value;
            beforeWordChoice.innerHTML += `<option value="${animal}">${animal}</option>`;
            sections[2].className = "notebook moveLeft";
            sections[3].className = "notebook showing moveRight";
        }
    });

    document.querySelector('#back-3').addEventListener('click', function() {
        sections[3].className = "notebook moveLeft";
        sections[2].className = "notebook showing moveRight";
    });

    document.querySelector('#next-4').addEventListener('click', function(e) {
        if (document.querySelector('#tragic-event').value == '') {
            document.querySelector('#tragic-event').focus;
        } else {
            e.preventDefault();
            const tragicEvent = document.querySelector('#tragic-event').value;
            beforeWordChoice.innerHTML += `<option value="${tragicEvent}">${tragicEvent}</option>`;
            sections[3].className = "notebook moveLeft";
            sections[4].className = "notebook showing moveRight";
        }
    });

    document.querySelector('#back-4').addEventListener('click', function() {
        sections[4].className = "notebook moveLeft";
        sections[3].className = "notebook showing moveRight";
    });

    document.querySelector('#next-5').addEventListener('click', function(e) {
        if (document.querySelector('#negative-emotion').value == '') {
            document.querySelector('#negative-emotion').focus;
        } else {
            e.preventDefault();
            const negativeEmotion = document.querySelector('#negative-emotion').value;
            beforeWordChoice.innerHTML += `<option value="${negativeEmotion}">${negativeEmotion}</option>`;
            sections[4].className = "notebook moveLeft";
            sections[5].className = "notebook showing moveRight";
            body.style.backgroundImage = 'url(images/form2bg.jpg)';
        }
    });

    document.querySelector('#back-5').addEventListener('click', function() {
        sections[5].className = "notebook moveLeft";
        sections[4].className = "notebook showing moveRight";
        body.style.backgroundImage = 'url(images/form1bg.jpg)';
    });

    document.querySelector('#next-6').addEventListener('click', function(e) {
        if (document.querySelector('#vulgar-exclamation').value == '') {
            document.querySelector('#vulgar-exclamation').focus;
        } else {
            e.preventDefault();
            const vulgarExclamation = document.querySelector('#vulgar-exclamation').value;
            beforeWordChoice.innerHTML += `<option value="${vulgarExclamation}">${vulgarExclamation}</option>`;
            sections[5].className = "notebook moveLeft";
            sections[6].className = "notebook showing moveRight";
        }
    });

    document.querySelector('#back-6').addEventListener('click', function() {
        sections[6].className = "notebook moveLeft";
        sections[5].className = "notebook showing moveRight";
    });

    document.querySelector('#next-7').addEventListener('click', function(e) {
        if (document.querySelector('#time-period').value == '') {
            document.querySelector('#time-period').focus;
        } else {
            e.preventDefault();
            const timePeriod = document.querySelector('#time-period').value;
            beforeWordChoice.innerHTML += `<option value="${timePeriod}">${timePeriod}</option>`;
            sections[6].className = "notebook moveLeft";
            sections[7].className = "notebook showing moveRight";
        }
    });

    document.querySelector('#back-7').addEventListener('click', function() {
        sections[7].className = "notebook moveLeft";
        sections[6].className = "notebook showing moveRight";
    });

    document.querySelector('#next-8').addEventListener('click', function(e) {
        if (document.querySelector('#something-scary').value == '') {
            document.querySelector('#something-scary').focus;
        } else {
            e.preventDefault();
            const somethingScary = document.querySelector('#something-scary').value;
            beforeWordChoice.innerHTML += `<option value="${somethingScary}">${somethingScary}</option>`;
            sections[7].className = "notebook moveLeft";
            sections[8].className = "notebook showing moveRight";
        }
    });

    document.querySelector('#back-8').addEventListener('click', function() {
        sections[8].className = "notebook moveLeft";
        sections[7].className = "notebook showing moveRight";
    });

    document.querySelector('#next-9').addEventListener('click', function(e) {
        if (document.querySelector('#plural-noun').value == '') {
            document.querySelector('#plural-noun').focus;
        } else {
            e.preventDefault();
            sections[8].className = "notebook moveLeft";
            sections[9].className = "notebook showing moveRight";
        }
    });

    document.querySelector('#back-9').addEventListener('click', function() {
        sections[9].className = "notebook moveLeft";
        sections[8].className = "notebook showing moveRight";
    });

    document.querySelector('#back-10').addEventListener('click', function() {
        body.style.backgroundImage = "url(images/form1bg.jpg)";
        header.className = "showing";
        finalMadlib.className = "hidden";
        sections[0].className = "notebook showing moveRight";
        beforeWordChoice.innerHTML = '';
    });

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        sections[9].className = "notebook moveLeft";
        body.style.backgroundImage = "url(images/finalbg.jpg)";
        finalMadlib.className = "showing";

        const place = document.querySelector('#place').value;
        const verb = document.querySelector('#verb').value;
        const animal = document.querySelector('#animal').value;
        const tragicEvent = document.querySelector('#tragic-event').value;
        const negativeEmotion = document.querySelector('#negative-emotion').value;
        const vulgarExclamation = document.querySelector('#vulgar-exclamation').value;
        const timePeriod = document.querySelector('#time-period').value;
        const somethingScary = document.querySelector('#something-scary').value;
        const pluralNoun = document.querySelector('#plural-noun').value;
        const beforeWord = document.querySelector('#before-word').value;
        
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

        const textFields = document.querySelectorAll('input[type=text]');

        for (let i = 0; i < textFields.length; i++) {
            textFields[i].value = '';
        }
    });

})();