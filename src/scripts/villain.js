import villain from '../images/villain.png';
import Bullet from './bullet';


class Villain{
    constructor(ctx, herox, heroy) {
        this.ctx = ctx;
        this.herox = herox;
        this.heroy = heroy;
        this.height = 63;
        this.width = 46;
        this.x = Math.floor((Math.random() * 1000) + 200);
        this.y = Math.floor((Math.random() * 600));
        this.speed = 1.8;
        this.travelDistance = 0;
        this.turnRate = Math.floor((Math.random() * 10) + 1);
        this.drawVillain = this.drawVillain.bind(this);
        this.move = this.move.bind(this);
        this.animateTurn = this.animateTurn.bind(this);
        this.regularFlying = this.regularFlying.bind(this);
        this.aggroFlying = this.aggroFlying.bind(this);
        this.isHeroSpotted = this.isHeroSpotted.bind(this);
        this.shootBullet = this.shootBullet.bind(this);

        this.bullets = [];
        this.heroCurrentlySpotted = false;

    }

    drawVillain() {
        const image = new Image();
        image.onload = () => this.ctx.drawImage(image, this.x, this.y, this.width, this.height);
        image.src = villain;
        // this.ctx.drawImage(image, this.x, this.y, this.width, this.height);
        this.animateTurn(this.ctx, this.x, this.y, image)

    }

    animateTurn(ctx, x, y, image) {
        ctx.save();
        ctx.translate(x, y);
        ctx.translate(31.5, 23);
        ctx.rotate(this.turnRate * Math.PI / 180);
        ctx.translate(-31.5, -23);
        ctx.drawImage(image, 0, 0, this.width, this.height);
        ctx.restore();
    }

    move() {
        this.x += this.speed * Math.cos(this.turnRate * Math.PI / 180);
        this.y += this.speed * Math.sin(this.turnRate * Math.PI / 180);
        this.travelDistance += 1;
    }

    animate() {
        this.drawVillain();
        this.move();
    }

    regularFlying(){
        if(this.travelDistance === 100){
            this.turnRate +=  (Math.random() < 0.5 ? -1 : 1) * 7;
            this.travelDistance = 0;
        }
    }

    aggroFlying(){
        let opposite = (this.heroy - this.y);
        let hypotopuse = Math.sqrt((this.herox - this.x) ** 2 + (this.heroy - this.y) ** 2);
        // let hypotopuse = (this.herox - this.x);
        this.turnRate += Math.asin(opposite / hypotopuse)
        // this.turnRate += Math.atan2(this.heroy, this.herox) * 180 / Math.PI;
        this.shootBullet();
    }



    isHeroSpotted(herox, heroy) {
        const actualDistance = Math.sqrt((herox - this.x) ** 2 + (heroy - this.y) ** 2);
        const allowedDistance = 300;
        return (actualDistance < allowedDistance);
    }

    shootBullet() {
        if(this.bullets.length < 2){
            let bullet = new Bullet(this.ctx, this.x, this.y, "Villain", this.turnRate, 0);
            this.bullets.push(bullet);
        }
    }

}

export default Villain;
