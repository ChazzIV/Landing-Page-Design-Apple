const appleWhite = document.getElementById('appleWhite');
const appelBlack = document.getElementById('appelBlack');
const appleGreen = document.getElementById('appleGreen');
const applePurple = document.getElementById('applePurple');
const appleYellow = document.getElementById('appleYellow');
const appleRed = document.getElementById('appleRed');
const sec = document.querySelector('.sec');


appleWhite.addEventListener('click', () => {
    const imgSlider = document.querySelector('.apple');    
    imgSlider.src = ('img/iphone11-white.png');
    sec.style.background = '#0a0a0a';
})

appelBlack.addEventListener('click', () => {
    const imgSlider = document.querySelector('.apple');    
    imgSlider.src = ('img/iphone11-black.png');
    sec.style.background = '#dadada';
})

appleGreen.addEventListener('click', () => {
    const imgSlider = document.querySelector('.apple');    
    imgSlider.src = ('img/iphone11-green.png');
    sec.style.background = '#CEF9B8';
})


applePurple.addEventListener('click', () => {
    const imgSlider = document.querySelector('.apple');    
    imgSlider.src = ('img/iphone11-purple.png');
    sec.style.background = '#EACBFC';
})


appleYellow.addEventListener('click', () => {
    const imgSlider = document.querySelector('.apple');    
    imgSlider.src = ('img/iphone11-yellow.png');
    sec.style.background = '#FFFFBA';
})


appleRed.addEventListener('click', () => {
    const imgSlider = document.querySelector('.apple');    
    imgSlider.src = ('img/iphone11-red.png');
    sec.style.background = '#FF4C6D';
})


