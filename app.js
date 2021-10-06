// import functions
// reference needed DOM elements
const catImage = document.getElementById('cat-image');
const catSound = document.getElementById('cat-sound');

//"state" - things that change over time
let catClicks = 0;

// set event listeners 
catImage.addEventListener('click', () => {
    catSound.play();
    catClicks = catClicks + 1;
    console.log('cat clicks is now', catClicks);

});

const dogImage = document.getElementById('dog-image');
const dogSound = document.getElementById('dog-sound');

let dogClicks = 0;

dogImage.addEventListener('click', () => {
    dogSound.play();
    dogClicks = dogClicks + 1;
    console.log('dog clicks is now', dogClicks);

});

const horseImage = document.getElementById('horse-image');
const horseSound = document.getElementById('horse-sound');

let horseClicks = 0;

horseImage.addEventListener('click', () => {
    horseSound.play();
    horseClicks = horseClicks + 1;
    console.log('horse clicks is now', horseClicks);

});