const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'blue';
ctx.fillRect(0, 0, 1000, 600);

let hero = new Image();
hero.src = './images/hero.png';
hero.onload = function () {
    context.drawImage(hero, 0, 0)
};