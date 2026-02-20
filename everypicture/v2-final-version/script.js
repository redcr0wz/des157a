(function () {
    "use strict";
    console.log("reading js");

    document.querySelector('#close').addEventListener('click', function(){
        console.log('over x');
    });

    document.querySelector('#pin1').addEventListener('click', function(){
        console.log('over pin');
    });

    const header = document.querySelector('header');

    setTimeout(function(){
        header.className = 'hidden';
    }, 7000);


})();