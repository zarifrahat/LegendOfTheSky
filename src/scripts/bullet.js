import bluebullet from '../images/blueshot.png'

class Bullet{
    constructor(x,y, shooter){
        this.x = x;
        this.y = y;
        this.speed = 2.5;
        this.whoShot = shooter;
        this.drawBullet = this.drawBullet.bind(this);
    }

    drawBullet(){
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        const image = new Image();
        console.log(image);
        image.src = bluebullet;
        image.onload = () => ctx.drawImage(image, this.x, this.y, 35, 6);
    }
}

export default Bullet;