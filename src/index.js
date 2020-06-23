import "./styles/index.scss";
import Hero from './scripts/hero';
import Bullet from './scripts/bullet';

const canvasCtx = document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    // const sky = document.getElementById('sky');
    // ctx.drawImage(sky, 0, 0, 1000, 600, 0, 0, 1000, 600);


    
    ctx.fillStyle = 'green';
    ctx.fillRect(0, 0, 1000, 600);

    let player = new Hero();
    player.drawHero();
    // player.animate();

    let bullet = new Bullet(0, 0, "hero");
    bullet.drawBullet();

    
});


