import sky from '../images/sky.jpg';
import hero from '../images/hero.png'
import villain from '../images/villain.png';
import armor from '../images/armor.png';
import dpad from '../images/dpad.png';
import zkey from '../images/zkey.png';



class GameInfo{
    constructor(ctxInfo){
        this.ctx = ctxInfo;
    }

    writeInfo(){
        this.ctx.font = "20px Arial";
        this.ctx.fillStyle = "white";
        this.ctx.fillText("Health:", 5, 25);
        this.ctx.fillText("Armor:", 5, 85);
        this.ctx.fillText("____________", 5, 125);
        this.ctx.fillText("Hero", 5, 170);
        this.ctx.fillText("Enemy", 5, 230);
        this.ctx.fillText("Armor", 5, 290);
        this.ctx.fillText("____________", 5, 310);
        this.ctx.fillText("Controls", 5, 340);
        this.ctx.fillText("Turn          Turn", 5, 465);
        this.ctx.fillText("Left          Right", 7, 485);
        this.ctx.fillText("Shoot", 50, 570);
    }

    drawHero(){
        const image = new Image();
        image.onload = () => this.ctx.drawImage(image, 75, 130, 40, 56);
        image.src = hero;
        this.ctx.drawImage(image, 75, 130, 40, 56);
    }
    drawVillain(){
        const image = new Image();
        image.onload = () => this.ctx.drawImage(image, 80, 195, 40, 56);
        image.src = villain;
        this.ctx.drawImage(image, 80, 195, 40, 56);
    }
    drawArmor(){
        const image = new Image();
        image.onload = () => this.ctx.drawImage(image, 70, 270, 50, 25);
        image.src = armor;
        this.ctx.drawImage(image, 70, 270, 50, 25);
    }
    drawDPAD(){
        const image = new Image();
        image.onload = () => this.ctx.drawImage(image, 10, 360, 124.5, 85.125);
        image.src = dpad;
        this.ctx.drawImage(image, 10, 360, 124.5, 85.125);
    }
    drawZKEY(){
        const image = new Image();
        image.onload = () => this.ctx.drawImage(image, 55, 510, 39, 42);
        image.src = zkey;
        this.ctx.drawImage(image, 55, 510, 39, 42);
    }

    showImages(){
        this.drawHero();
        this.drawVillain();
        this.drawArmor();
        this.drawDPAD();
        this.drawZKEY();
    }

    animate(){
        // this.drawBackground();
        this.showImages();
        this.writeInfo();
    }

}

export default GameInfo;