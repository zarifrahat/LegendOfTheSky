import armor from '../images/armor.png';

class Armor{
    constructor(ctx){
        this.ctx = ctx;
        this.height = 25;
        this.width = 50;
        this.x = Math.floor((Math.random() * 1000) + 200);
        this.y = Math.floor((Math.random() * 600));
        this.speed = 0.1;
        this.turnRate = Math.floor((Math.random() * 10) + 1);
        this.drawArmor = this.drawArmor.bind(this);
        this.move = this.move.bind(this);
    }

    drawArmor() {
        const image = new Image();
        image.onload = () => this.ctx.drawImage(image, this.x, this.y, 50, 25);
        image.src = armor;
        this.ctx.drawImage(image, this.x, this.y, 50, 25);
    }

    move() {
        this.x += this.speed * Math.cos(this.turnRate * Math.PI / 180);
        this.y += this.speed * Math.sin(this.turnRate * Math.PI / 180);
    }

    animate(){
        this.drawArmor();
        this.move();
    }

}

export default Armor;
