import Hero from './hero';
import Bullet from './bullet';

class Game {
    constructor(ctx){
        this.ctx = ctx;
        this.x = 1200;
        this.y = 600;
        this.hero = new Hero(ctx);
        this.bullet = new Bullet(ctx, 0, 10, "hero", 0);
        this.bullets = this.hero.bullets;
        this.animate = this.animate.bind(this);
        this.allObjects = this.allObjects.bind(this);
        this.addBullets = this.addBullets.bind(this);
        this.removeBullets = this.removeBullets.bind(this);

    }

    allObjects(){
        return [this.hero].concat(this.bullets);
    }

    addBullets(){
        this.bullets = this.hero.bullets;
    }
    removeBullets() {
        this.bullets = this.bullets.filter(bullet => bullet.travelDistance < 100);
    }
    
    animate(){
        this.ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.addBullets();
        this.removeBullets();
        this.allObjects().forEach(object =>{
            object.animate();
            if (object.x > canvas.width) {
                object.x = 0;
            }
            if (object.y > canvas.height) {
                object.y = 0;
            }
            if (object.x < 0) {
                object.x = canvas.width;
            }
            if (object.y < 0) {
                object.y = canvas.height;
            }
        }) 
        requestAnimationFrame(this.animate);
    }
}

export default Game;