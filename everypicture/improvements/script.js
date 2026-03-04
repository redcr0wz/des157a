(function () {
    "use strict";
    console.log("reading js");

    // TIMER FOR HEADER

    const header = document.querySelector('header');

    // hides after a bit
    setTimeout(function(){
        header.className = 'hidden';
    }, 9000);

    // FRAME - TOP RIGHT

    const main = document.querySelector('#frame');

    const img = document.querySelector('#container #main-image');
    const svg = document.querySelector('#container svg');

    // closes the whole setup... refresh to get it back 
    document.querySelector('#close').addEventListener('click', function(){     
        main.classList = 'hidden';

        setTimeout(function(){
            main.classList = '';
        }, 3000);
    });
    
    // makes the setup big, then back to normal
    document.querySelector('#expand').addEventListener('click', function(){
        main.style.scale = '120%';

        setTimeout(function(){
            main.style.scale = '90%';
        }, 3000);
    });
    
    // makes the setup small, then back to normal
    document.querySelector('#minimize').addEventListener('click', function(){
        main.style.scale = '20%';

        setTimeout(function(){
            main.style.scale = '90%';
        }, 3000);
    });

    // FRAME - TOOLS

    // makes the main image visible
    document.querySelector('#brush').addEventListener('click', function(){
        img.style.opacity = '1';
    });

    // makes the main image invisible
    document.querySelector('#erase').addEventListener('click', function(){
        img.style.opacity = '0';
        svg.style.opacity = '0';
    });

    // makes the image grayscale, then back to normal
    document.querySelector('#fill').addEventListener('click', function(){
        img.style.filter = 'grayscale(1)';

        setTimeout(function(){
            img.style.filter = 'grayscale(0)';
        }, 3000);
    });

    // makes the main image blurry, then back to normal
    document.querySelector('#search').addEventListener('click', function(){
        img.style.filter = 'blur(50px)';

        setTimeout(function(){
            img.style.filter = 'blur(0px)';
        }, 3000);
    });

    // FRAME - COLORS
    // alters the image's hue
    function changeColor(num) {
        img.style.filter = `hue-rotate(${num}deg)`;
    }

    // normal color toggle
    document.querySelector('#blue').addEventListener('click', function(){
        changeColor(0);
    });

    document.querySelector('#purple').addEventListener('click', function(){
        changeColor(50);
    });

    document.querySelector('#red').addEventListener('click', function(){
        changeColor(100);
    });

    document.querySelector('#orange').addEventListener('click', function(){
        changeColor(150);
    });

    document.querySelector('#green').addEventListener('click', function(){
        changeColor(200);
    });

    document.querySelector('#teal').addEventListener('click', function(){
        changeColor(250);
    });

    document.querySelector('#indigo').addEventListener('click', function(){
        changeColor(300);
    });

    // MAIN IMG + POPUPS

    // this could've been done more efficiently via a function + arrays but i was time crunched oops
    // so... TODO: make this more efficient in improvements

    const popup = document.querySelector('#popup');
    const popupTitle = document.querySelector('#popup-title');
    const popupImage = document.querySelector('#popup-img');
    const popupText = document.querySelector('#popup-text');

    function trinketInfo(title, text, src) {
        popupTitle.innerHTML = title;
        popupText.innerHTML = text;
        popupImage.src = `images/${src}.jpg`;

        popup.classList = 'active';
    }

    document.querySelector('#thisisfine').addEventListener('click', function(){
        trinketInfo('this is fine!', '<p>a pin depicting the "this is fine!" dog. <br><br>a gift from my sister.</p>', 'thisisfine');
    });

    document.querySelector('#pliskin').addEventListener('click', function(){
        trinketInfo('he\'s just some guy!', '<p>a pin from <a href="https://otasunefanzine.carrd.co/">metal gear solid zine</a> that i bought. <br><br>he\'s just some guy!</p>', 'pliskin');
    });

    document.querySelector('#emoji').addEventListener('click', function(){
        trinketInfo('ooo?', '<p>a silly pin from my roommate.</p>', 'emoji');
    });

    document.querySelector('#egg').addEventListener('click', function(){
        trinketInfo('dino egg', '<p>a dinosaur egg keychain that i got from kobe mini mart in davis. <br><br>my friend from colorado also has one.</p>', 'egg');
    });

    document.querySelector('#codec1').addEventListener('click', function(){
        trinketInfo('snaaake!', '<p>a set of metal gear solid pins. <br><br>a gift from my sister.</p>', 'codec1');
    });

    document.querySelector('#caleb').addEventListener('click', function(){
        trinketInfo('widogast\'s web of fire', '<p>a pin of caleb widogast, my favorite character from the dnd campaign, critical role. <br><br>a gift from my sister.</p>', 'caleb');
    });

    document.querySelector('#plate').addEventListener('click', function(){
        trinketInfo('he didn\'t eat a car, did he?', '<p>a keychain featuring a prop from my favorite movie "jaws". <br><br>bought from etsy.</p>', 'plate');
    });

    document.querySelector('#snake').addEventListener('click', function(){
        trinketInfo('!', '<p>a pin of solid snake, my favorite character from metal gear solid. <br><br>a gift from my sister.</p>', 'snake');
    });

    document.querySelector('#sans').addEventListener('click', function(){
        trinketInfo('sans and reigen...', '<p>a keychain where sans from undertale is pregnant with reigen arataka from mob psycho 100. there\'s liquid inside (unfortunately). <br><br>somehow got it for sale when the queen of england died.</p>', 'sans');
    });

    document.querySelector('#codec2').addEventListener('click', function(){
        trinketInfo('snake, do you read me?', '<p>a set of metal gear solid pins. <br><br>a gift from my sister.</p>', 'codec2');
    });

    document.querySelector('#chiikawa').addEventListener('click', function(){
        trinketInfo('uwa', '<p>a keychain of chiikawa. <br><br>bought during my family trip from japan.</p>', 'chiikawa');
    });

    document.querySelector('#jaws').addEventListener('click', function(){
        trinketInfo('shark!', '<p>a pin of the movie poster for jaws. <br><br>bought from a hot topic trip.</p>', 'jaws');
    });

    document.querySelector('#deathnote').addEventListener('click', function(){
        trinketInfo('un appel', '<p>a pin from <a href="https://lawlightzine.bigcartel.com/">death note zine</a> that i bought. <br><br>shows light yagami as a little devil on L.</p>', 'deathnote');
    });

    document.querySelector('#snakehead').addEventListener('click', function(){
        trinketInfo('help!!! shark', '<p>a pin of a snake head hissing from a safari family trip. <br><br>paired with my jaws speech bubble pin.</p>', 'sharksnake');
    });

    document.querySelector('#kars').addEventListener('click', function(){
        trinketInfo('karsu', '<p>a rubber keychain of kars from jojo\'s bizarre adventure. <br><br>bought during my japan family trip.</p>', 'kars');
    });

    document.querySelector('#disco').addEventListener('click', function(){
        trinketInfo('disco fever!', '<p>a pin from <a href="https://discoelysiumzine.bigcartel.com/">disco elysium zine</a> that i bought. <br><br>harry\'s alligator skin shoes.</p>', 'disco');
    });

    document.querySelector('#shark').addEventListener('click', function(){
        trinketInfo('help!!! shark', '<p>a pin of a bit of a prop in the movie jaws. <br><br>paired with my snake head.</p>', 'sharksnake');
    });

    document.querySelector('#raptor').addEventListener('click', function(){
        trinketInfo('rawr!', '<p>a raptor pin. <br><br>a gift from my friend from colorado, cooper.</p>', 'raptor');
    });

    document.querySelector('#kimharry').addEventListener('click', function(){
        trinketInfo('two old men', '<p>a pair of keychains featuring kim and harry from disco elysium. <br><br>bought from <a href="https://www.etsy.com/listing/1668930691/harry-kim-heart-keychain?ref=shop_home_active_21&crt=1&logging_key=a3768122f18f4191217af106a324b4cbb2a4e76c%3A1668930691">strawbearries.</a></p>', 'kimharry');
    });

    document.querySelector('#goblin').addEventListener('click', function(){
        trinketInfo('spider-man!', '<p>a pin featuring the green goblin and spider-man. <br><br>bought from etsy.</p>', 'goblin');
    });

    document.querySelector('#otasune').addEventListener('click', function(){
        trinketInfo('do you think can bloom? even on a battlefield?', '<p>a pin from <a href="https://otasunefanzine.carrd.co/">metal gear solid zine</a> that i bought. <br><br>a match made in heaven.</p>', 'otasune');
    });

    document.querySelector('#ghostface').addEventListener('click', function(){
        trinketInfo('what\'s your favorite scary movie?', '<p>a keychain of ghostface from scream, specifically the dead by daylight\'s rendition. <br><br>bought alongside a matching dwight keychain for my boyfriend <3 <br><br>also old snake from metal gear solid 4 is behind him.</p>', 'ghostface');
    });

    // closing pop-up
    document.querySelector('#close-popup').addEventListener('click', function(){
        popup.classList = '';

        popupTitle.innerHTML = '';
        popupText.innerHTML = '<p></p>';
        popupImage.src = 'images/egg.jpg';
    });

})();