import bluebullet from '../images/blueshot.png'
import redshot from '../images/redshot.png'

class Bullet{
    constructor(ctx, x, y, shooter, turnRate, travelDistance){
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.height = 4;
        this.width = 24;
        this.speed = 6;
        this.shooter = shooter;
        this.turnRate = turnRate;
        this.travelDistance = travelDistance;
        this.drawBullet = this.drawBullet.bind(this);
        this.animate = this.animate.bind(this);
        this.animateTurn = this.animateTurn.bind(this);
        this.move = this.move.bind(this);
        
    }

    drawBullet(){
        const image = new Image();
        image.onload = () => this.ctx.drawImage(image, this.x, this.y, 24, 4);
        if(this.shooter === "Hero"){
            image.src = bluebullet;
        } else {
            image.src = redshot;
        }
        // this.ctx.drawImage(image, this.x, this.y, 24, 4);
        this.animateTurn(this.ctx, this.x, this.y, image)

    }
    animateTurn(ctx, x, y, image) {
        ctx.save();
        ctx.translate(x, y);
        ctx.translate(12, 2);
        ctx.rotate(this.turnRate * Math.PI / 180);
        ctx.translate(-12, -2);
        ctx.drawImage(image, 0, 0, 24, 4);
        ctx.restore();
    }

    move() {
        this.x += this.speed * Math.cos(this.turnRate * Math.PI / 180);
        this.y += this.speed * Math.sin(this.turnRate * Math.PI / 180);
        this.travelDistance += 1;
    }

    animate(){
        this.drawBullet();
        this.move();

    }

}

export default Bullet;