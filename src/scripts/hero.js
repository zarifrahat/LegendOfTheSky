import hero from '../images/hero.png'
import Bullet from './bullet';

class Hero {
    constructor(ctx) {
        this.ctx = ctx;
        this.x = 0;
        this.y = 100;
        this.height = 40;
        this.width = 56;
        this.health = 100;
        this.armor = 0;
        this.speed = 2;
        this.turnRate = 0;
        this.drawHero = this.drawHero.bind(this);
        this.animate = this.animate.bind(this);
        this.move = this.move.bind(this);
        this.shootBullet = this.shootBullet.bind(this);
        this.keysPressed = this.keysPressed.bind(this);
        this.keysUp = this.keysUp.bind(this);
        this.turnLeft = this.turnLeft.bind(this);
        this.turnRight = this.turnRight.bind(this);

        this.bullets = [];
    }

    drawHero(){
        // const image = document.getElementById('source');
        const image = new Image();
        image.onload = () => this.ctx.drawImage(image, this.x, this.y, 40, 56);

        image.src = hero;
        this.animateTurn(this.ctx, this.x, this.y, image)


    }

    animateTurn(ctx, x, y, image){
        ctx.save();
        ctx.translate(x, y);
        ctx.translate(20, 28);
        ctx.rotate(this.turnRate * Math.PI / 180);
        ctx.translate(-20, -28);
        ctx.drawImage(image, 0, 0, 40, 56);
        ctx.restore();
    }

    move(){
        this.x += this.speed * Math.cos(this.turnRate * Math.PI / 180);
        this.y += this.speed * Math.sin(this.turnRate * Math.PI / 180);
    }

    turnLeft(){
        this.turnRate += -6;
    }

    turnRight(){
        this.turnRate += 6;

    }

    keysPressed(e){
        if (e.keyCode === 90) {
            this.shootBullet();
        }

        if (e.key == "Right" || e.key == "ArrowRight") {
            this.turnRight();
        }else if (e.key == "Left" || e.key == "ArrowLeft") {
            this.turnLeft();
        }
    } 

    
    keysUp(e) {
        if (e.key == "Right" || e.key == "ArrowRight" || e.key == "Left" || e.key == "ArrowLeft"){
            this.turnRate = this.turnRate;
        }
    } 
    
    
    animate(){
        this.drawHero();
        this.move();
        document.addEventListener("keydown", this.keysPressed);
        document.addEventListener("keyup", this.keysUp);
    }

    shootBullet(){
        let bullet = new Bullet(this.ctx, this.x, this.y, "Hero", this.turnRate, 0);
        this.bullets.push(bullet);
    }
}


export default Hero;