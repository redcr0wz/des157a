(function () {
    "use strict";
    console.log("reading js");

    // TIMER FOR HEADER

    const header = document.querySelector('header');

    // hides after a bit
    setTimeout(function(){
        header.className = 'hidden';
    }, 7000);

    // FRAME - TOP RIGHT

    const main = document.querySelector('#frame');

    const img = document.querySelector('#container #main-image');
    const svg = document.querySelector('#container svg');

    // closes the whole setup... refresh to get it back 
    document.querySelector('#close').addEventListener('click', function(){     
        main.classList = 'hidden';
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

    // normal color toggle
    document.querySelector('#blue').addEventListener('click', function(){
        img.style.filter = 'hue-rotate(0deg)';
    });

    document.querySelector('#purple').addEventListener('click', function(){
        img.style.filter = 'hue-rotate(50deg)';
    });

    document.querySelector('#red').addEventListener('click', function(){
        img.style.filter = 'hue-rotate(100deg)';
    });

    document.querySelector('#orange').addEventListener('click', function(){
        img.style.filter = 'hue-rotate(150deg)';
    });

    document.querySelector('#green').addEventListener('click', function(){
        img.style.filter = 'hue-rotate(200deg)';
    });

    document.querySelector('#teal').addEventListener('click', function(){
        img.style.filter = 'hue-rotate(250deg)';
    });

    document.querySelector('#indigo').addEventListener('click', function(){
        img.style.filter = 'hue-rotate(300deg)';
    });

    // MAIN IMG + POPUPS

    // this could've been done more efficiently via a function + arrays but i was time crunched oops
    // so... TODO: make this more efficient in improvements

    const popup = document.querySelector('#popup');
    const popupTitle = document.querySelector('#popup-title');
    const popupImage = document.querySelector('#popup-img');
    const popupText = document.querySelector('#popup-text');

    document.querySelector('#thisisfine').addEventListener('click', function(){
        popupTitle.innerHTML = 'this is fine!';
        popupText.innerHTML = '<p>a pin depicting the "this is fine!" dog. a gift from my sister.</p>';
        popupImage.src = 'images/thisisfine.jpg';

        popup.classList = 'active';
    });

    document.querySelector('#pliskin').addEventListener('click', function(){
        popupTitle.innerHTML = 'he\'s just some guy!';
        popupText.innerHTML = '<p>a pin from <a href="https://otasunefanzine.carrd.co/">metal gear solid zine</a> that i bought. he\'s just some guy!</p>';
        popupImage.src = 'images/pliskin.jpg';

        popup.classList = 'active';
    });

    document.querySelector('#emoji').addEventListener('click', function(){
        popupTitle.innerHTML = 'ooo?';
        popupText.innerHTML = '<p>a silly pin from my roommate.</p>';
        popupImage.src = 'images/emoji.jpg';

        popup.classList = 'active';
    });

    document.querySelector('#egg').addEventListener('click', function(){
        popupTitle.innerHTML = 'dino egg';
        popupText.innerHTML = '<p>a dinosaur egg keychain that i got from kobe mini mart in davis. my friend from colorado also has one.</p>';
        popupImage.src = 'images/egg.jpg';

        popup.classList = 'active';
    });

    document.querySelector('#codec1').addEventListener('click', function(){
        popupTitle.innerHTML = 'snaaake!';
        popupText.innerHTML = '<p>a set of metal gear solid pins. a gift from my sister.</p>';
        popupImage.src = 'images/codec1.jpg';

        popup.classList = 'active';
    });

    document.querySelector('#caleb').addEventListener('click', function(){
        popupTitle.innerHTML = 'widogast\'s web of fire';
        popupText.innerHTML = '<p>a pin of caleb widogast, my favorite character from the dnd campaign, critical role. a gift from my sister.</p>';
        popupImage.src = 'images/caleb.jpg';

        popup.classList = 'active';
    });

    document.querySelector('#plate').addEventListener('click', function(){
        popupTitle.innerHTML = 'he didn\'t eat a car, did he?';
        popupText.innerHTML = '<p>a keychain featuring a prop from my favorite movie "jaws". bought from etsy.</p>';
        popupImage.src = 'images/plate.jpg';

        popup.classList = 'active';
    });

    document.querySelector('#snake').addEventListener('click', function(){
        popupTitle.innerHTML = '!';
        popupText.innerHTML = '<p>a pin of solid snake, my favorite character from metal gear solid. a gift from my sister.</p>';
        popupImage.src = 'images/snake.jpg';

        popup.classList = 'active';
    });

    document.querySelector('#sans').addEventListener('click', function(){
        popupTitle.innerHTML = 'sans and reigen...';
        popupText.innerHTML = '<p>a keychain where sans from undertale is pregnant with reigen arataka from mob psycho 100. there\'s liquid inside (unfortunately). somehow got it for sale when the queen of england died.</p>';
        popupImage.src = 'images/sans.jpg';

        popup.classList = 'active';
    });

    document.querySelector('#codec2').addEventListener('click', function(){
        popupTitle.innerHTML = 'snake do you read me?';
        popupText.innerHTML = '<p>a set of metal gear solid pins. a gift from my sister.</p>';
        popupImage.src = 'images/codec2.jpg';

        popup.classList = 'active';
    });

    document.querySelector('#chiikawa').addEventListener('click', function(){
        popupTitle.innerHTML = 'uwa';
        popupText.innerHTML = '<p>a keychain of chiikawa. bought during my family trip from japan.</p>';
        popupImage.src = 'images/chiikawa.jpg';

        popup.classList = 'active';
    });

    document.querySelector('#jaws').addEventListener('click', function(){
        popupTitle.innerHTML = 'shark!';
        popupText.innerHTML = '<p>a pin of the movie poster for jaws. bought from a hot topic trip.</p>';
        popupImage.src = 'images/jaws.jpg';

        popup.classList = 'active';
    });

    document.querySelector('#deathnote').addEventListener('click', function(){
        popupTitle.innerHTML = 'this is fine!';
        popupText.innerHTML = '<p>a pin from <a href="https://lawlightzine.bigcartel.com/">death note zine</a> that i bought. shows light yagami as a little devil on L.</p>';
        popupImage.src = 'images/deathnote.jpg';

        popup.classList = 'active';
    });

    document.querySelector('#snakehead').addEventListener('click', function(){
        popupTitle.innerHTML = 'help!!! shark';
        popupText.innerHTML = '<p>a pin of a snake head hissing from a safari family trip. paired with my jaws speech bubble pin.</p>';
        popupImage.src = 'images/sharksnake.jpg';

        popup.classList = 'active';
    });

    document.querySelector('#kars').addEventListener('click', function(){
        popupTitle.innerHTML = 'karsu';
        popupText.innerHTML = '<p>a rubber keychain of kars from jojo\'s bizarre adventure. bought during my japan family trip.</p>';
        popupImage.src = 'images/kars.jpg';

        popup.classList = 'active';
    });

    document.querySelector('#disco').addEventListener('click', function(){
        popupTitle.innerHTML = 'this is fine!';
        popupText.innerHTML = '<p>a pin from <a href="https://discoelysiumzine.bigcartel.com/">disco elysium zine</a> that i bought. harry\'s alligator skin shoes.</p>';
        popupImage.src = 'images/disco.jpg';

        popup.classList = 'active';
    });

    document.querySelector('#shark').addEventListener('click', function(){
        popupTitle.innerHTML = 'help!!! shark';
        popupText.innerHTML = '<p>a pin of a bit of a prop in the movie jaws. paired with my snake head.</p>';
        popupImage.src = 'images/sharksnake.jpg';

        popup.classList = 'active';
    });

    document.querySelector('#raptor').addEventListener('click', function(){
        popupTitle.innerHTML = 'rawr!';
        popupText.innerHTML = '<p>a raptor pin. gift from my friend from colorado, cooper.</p>';
        popupImage.src = 'images/raptor.jpg';

        popup.classList = 'active';
    });

    document.querySelector('#kimharry').addEventListener('click', function(){
        popupTitle.innerHTML = 'two old men';
        popupText.innerHTML = '<p>a pair of keychains featuring kim and harry from disco elysium. bought from <a href="https://www.etsy.com/listing/1668930691/harry-kim-heart-keychain?ref=shop_home_active_21&crt=1&logging_key=a3768122f18f4191217af106a324b4cbb2a4e76c%3A1668930691">strawbearries.</a></p>';
        popupImage.src = 'images/kimharry.jpg';

        popup.classList = 'active';
    });

    document.querySelector('#goblin').addEventListener('click', function(){
        popupTitle.innerHTML = 'spider-man!';
        popupText.innerHTML = '<p>a pin featuring the green goblin and spider-man. bought from etsy.</p>';
        popupImage.src = 'images/goblin.jpg';

        popup.classList = 'active';
    });

    document.querySelector('#otasune').addEventListener('click', function(){
        popupTitle.innerHTML = 'do you think can bloom? even on a battlefield?';
        popupText.innerHTML = '<p>a pin from <a href="https://otasunefanzine.carrd.co/">metal gear solid zine</a> that i bought. a match made in heaven.</p>';
        popupImage.src = 'images/otasune.jpg';

        popup.classList = 'active';
    });

    document.querySelector('#ghostface').addEventListener('click', function(){
        popupTitle.innerHTML = 'what\'s your favorite scary movie?';
        popupText.innerHTML = '<p>a keychain of ghostface from scream, specifically the dead by daylight\'s rendition. bought alongside a matching dwight keychain for my boyfriend <3 also old snake from metal gear solid 4 is behind him.</p>';
        popupImage.src = 'images/ghostface.jpg';

        popup.classList = 'active';
    });

    // closing pop-up
    document.querySelector('#close-popup').addEventListener('click', function(){
        popup.classList = '';

        popupTitle.innerHTML = '';
        popupText.innerHTML = '<p></p>';
        popupImage.src = 'images/egg.jpg';
    });

})();