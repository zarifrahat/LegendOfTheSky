class Hero {
    constructor() {
        this.x = 0;
        this.y = 100;
        this.speed = 2;
        this.turnRate = 0;
        this.drawHero = this.drawHero.bind(this);
        this.animate = this.animate.bind(this);
        this.move = this.move.bind(this);
        this.keysPressed = this.keysPressed.bind(this);
        this.keysUp = this.keysUp.bind(this);
        this.turnLeft = this.turnLeft.bind(this);
        this.turnRight = this.turnRight.bind(this);
    }

    drawHero(){
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        const image = document.getElementById('source');
        // console.log(image);
        this.animateTurn(ctx, this.x, this.y, image)


    }

    animateTurn(ctx, x, y, image){
        ctx.save();
        ctx.translate(x, y);
        ctx.translate(20, 28);
        ctx.rotate(this.turnRate * Math.PI / 180);
        ctx.translate(-20, -28);
        ctx.drawImage(image, x, y, 40, 56);
        ctx.restore();
    }

    move(){
        this.x += this.speed;
    }

    turnLeft(){
        this.turnRate += -1;
    }

    turnRight(){
        this.turnRate += 1;

    }

    keysPressed(e){
        if (e.key == "Right" || e.key == "ArrowRight") {
            this.turnRight();
        }
        else if (e.key == "Left" || e.key == "ArrowLeft") {
            this.turnLeft();
        }
    } 

    keysUp(e) {
        if (e.key == "Right" || e.key == "ArrowRight" || e.key == "Left" || e.key == "ArrowLeft"){
            this.turnRate = this.turnRate;
        }
    } 


    animate(){
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        ctx.fillStyle = 'green';
        ctx.fillRect(0, 0, 1000, 600);
        this.drawHero();
        this.move();

        if (this.x > canvas.height) {
            this.x = 0;
        }
        if (this.y > canvas.width) {
            this.y = 0;
        }
        if (this.x < 0) {
            this.x = canvas.height;
        }
        if (this.y < 0) {
            this.y = canvas.width;
        }
        document.addEventListener("keydown", this.keysPressed);
        document.addEventListener("keyup", this.keysUp);

        requestAnimationFrame(this.animate);
    }

}


export default Hero;