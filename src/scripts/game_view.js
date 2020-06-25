class GameView{
    constructor(ctx){
        this.game = new Game();
        this.ctx = ctx;
        this.img = new Image();
        this.img.onload = () => {
            this.ctx.drawImage(this.img, 0, 0);
        };
        this.img.src = "sky.jpg";
    }
}

export default GameView;