import "./styles/index.scss";
import sky from './images/sky.jpg'
import Hero from './scripts/hero';
import Bullet from './scripts/bullet';
import Game from './scripts/game';

const canvasCtx = document.addEventListener('DOMContentLoaded', () => {
    const canvasBackground = document.getElementById('canvasBackground');
    const ctxBackground = canvasBackground.getContext('2d');
    
    // const sky = document.getElementById('sky');
    // ctx.drawImage(sky, 0, 0, 1000, 600, 0, 0, 1000, 600);
    
    const image = new Image();
    image.onload = () => ctxBackground.drawImage(image, 0, 0, 3000, 2000, 0, 0, 1200, 800);
    image.src = sky;

    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    let game1 = new Game(ctx);
    // game1.animate();

    // let player = new Hero(ctx);
    // // player.drawHero();
    // player.animate();

    // let bullet = new Bullet(ctx, 0, 0, "hero", 0);
    // bullet.animate();

    
});


