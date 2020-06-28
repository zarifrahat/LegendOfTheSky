import "./styles/index.scss";
import sky from './images/sky.jpg';
import bluebullet from './images/blueshot.png';
import redshot from './images/redshot.png'
import Hero from './scripts/hero';
import Bullet from './scripts/bullet';
import Game from './scripts/game';
import GameInfo from './scripts/gameInfo';

const canvasCtx = document.addEventListener('DOMContentLoaded', () => {
    const canvasLeft = document.getElementById('canvasLeft');
    const ctxInfo = canvasLeft.getContext('2d');
    let gameInfo1 = new GameInfo(ctxInfo);
    gameInfo1.animate();
    const canvasBackground = document.getElementById('canvasBackground');
    const ctxBackground = canvasBackground.getContext('2d');
    
    const image = new Image();
    image.onload = () => ctxBackground.drawImage(image, 0, 0, 3000, 2000, 0, 0, 1200, 800);
    image.src = sky;

    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const menu = document.getElementById('menu');
    const prologue = document.getElementById('prologue');

    function hideMenu(element){
        element.style.display = "none";
    }
    function showMenu(element){
        element.style.display = "block";
    }
    let isAudioOn = true;
    const soundONIcon = document.getElementById('soundon');
    const soundOFFIcon = document.getElementById('soundoff');
    function hideSoundButton(element) {
        element.style.display = "none";
    }
    function showSoundButton(element) {
        element.style.display = "inline";
    }

    // let game1 = new Game(ctx);
    showMenu(prologue);
    document.querySelectorAll('.play')[0].addEventListener('click', ()=>{
        hideMenu(prologue);
        showMenu(menu);
    });
    document.querySelectorAll('.easy')[0].addEventListener('click', ()=>{
        let easyGame = new Game(ctx, 1, ctxInfo);

        hideMenu(menu);
        easyGame.animate();
        if(isAudioOn){
            const music = document.getElementById("gameMusic");
            music.loop = true;
            music.play(); 
        }

    });
    document.querySelectorAll('.medium')[0].addEventListener('click', ()=>{
        let mediumGame = new Game(ctx, 2, ctxInfo);

        hideMenu(menu);
        mediumGame.changeDifficulty(2)
        mediumGame.animate();
        if (isAudioOn) {
            const music = document.getElementById("gameMusic");
            music.loop = true;
            music.play();
        }

    });
    document.querySelectorAll('.hard')[0].addEventListener('click', ()=>{
        let HardGame = new Game(ctx, 3, ctxInfo);
        hideMenu(menu);
        HardGame.changeDifficulty(3)
        HardGame.animate();
        if (isAudioOn) {
            const music = document.getElementById("gameMusic");
            music.loop = true;
            music.play();
        }

    });
});


