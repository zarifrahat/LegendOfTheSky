import Hero from './hero';
import Bullet from './bullet';
import Armor from './armor';
import Villain from './villain';

class Game {
    constructor(ctx, mode, ctxInfo){
        this.ctx = ctx;
        this.ctxInfo = ctxInfo;
        this.mode = mode;
        this.x = 1200;
        this.y = 600;
        this.hero = new Hero(ctx);
        this.bullet = new Bullet(ctx, 0, 10, "hero", 0);
        this.bullets = this.hero.bullets;
        this.villainbullets = [];
        this.armors = [];
        this.armorCount = 5;
        this.villains = [];
        this.villainCount = 5;
        this.animate = this.animate.bind(this);
        this.allObjects = this.allObjects.bind(this);
        this.addBullets = this.addBullets.bind(this);
        this.addVillainBullets = this.addVillainBullets.bind(this);
        this.updateVillainBulletsOnScreen = this.updateVillainBulletsOnScreen.bind(this);
        this.removeBullets = this.removeBullets.bind(this);
        this.createArmors = this.createArmors.bind(this);
        this.createVillains = this.createVillains.bind(this);
        this.checkCollision = this.checkCollision.bind(this);
        this.checkBulletCollision = this.checkBulletCollision.bind(this);
        this.checkHeroCollision = this.checkHeroCollision.bind(this);
        this.checkVillainBulletCollision = this.checkVillainBulletCollision.bind(this);
        this.spottedHero = this.spottedHero.bind(this);
        this.changeDifficulty = this.changeDifficulty.bind(this);
        
        this.createArmors();
        this.createVillains();
    }

    changeDifficulty(difficulty){
        // console.log(difficulty)
        if (difficulty === 2 ){
            this.villainCount = 5;
            // console.log(this.villainCount)
            this.createVillains();

        } else if (difficulty === 3 ){
            this.villainCount = 10;
            this.createArmors();
            this.createVillains();
        } 
    }

    allObjects(){
        return [this.hero].concat(
            this.bullets,
            this.armors, 
            this.villains, 
            this.villainbullets);
    }

    addBullets(){
        this.bullets = this.hero.bullets;
    }
    addVillainBullets(villain){
        this.villainbullets = villain.bullets;
    }
    updateVillainBulletsOnScreen(){
        this.villains.forEach(villain =>{
            this.addVillainBullets(villain);
        })
    }
    removeBullets() {
        this.bullets = this.bullets.filter(bullet => bullet.travelDistance < 750);
        this.villainbullets = this.villainbullets.filter(bullet => bullet.travelDistance < 750);
    }

    createArmors(){
        for (let i = 0; i < this.armorCount; i++) {
            let armor = new Armor(this.ctx);
            this.armors.push(armor);

        }
    }

    createVillains(){
        for (let i = 0; i < this.villainCount; i++) {
            // console.log(this.villainCount)
            let villain = new Villain(this.ctx, this.hero.x, this.hero.y);
            this.villains.push(villain);

        }
    }

    checkCollision(hero, other) {
        const actualDistance = Math.sqrt((hero.x - other.x) ** 2 + (hero.y - other.y) ** 2);
        const allowedDistance = hero.width;
        return (actualDistance < allowedDistance);
    }
    checkBulletCollision(plane, other) {
        const actualDistance = Math.sqrt((plane.x - other.x) ** 2 + (plane.y - other.y) ** 2);
        const allowedDistance = other.width;
        return (actualDistance < allowedDistance);
    }

    checkHeroCollision(){
            for (let index = 0; index < this.armors.length; index++) {
                let armorObject = this.armors[index];
                if(this.checkCollision(this.hero, armorObject)){
                    this.armors.splice(index, 1);
                    this.hero.armor += 10;
                }
            }
        
    }

    checkVillainBulletCollision(){
        for (let index = 0; index < this.bullets.length; index++) {
            let bulletObject = this.bullets[index];
            for (let index2 = 0; index2 < this.villains.length; index2++) {
                let villainObject = this.villains[index2];
                if (this.checkBulletCollision(villainObject, bulletObject)) {
                    this.bullets.splice(index, 1);
                    this.villains.splice(index2, 1);
                }
            }
        }
    }
    checkHeroBulletCollision(){
        for (let index = 0; index < this.villainbullets.length; index++) {
            let villainBulletObject = this.villainbullets[index];
            if (this.checkBulletCollision(this.hero, villainBulletObject)) {
                this.villainbullets.splice(index, 1);
                if(this.hero.armor > 0){
                    this.hero.armor -= 10;
                } else {
                    this.hero.health -= 10;
                }
            }
        }
    }

    checkHeroToVillainCollision(){
        for (let index = 0; index < this.villains.length; index++) {
            let villainObject = this.villains[index];
            if (this.checkCollision(this.hero, villainObject)) {
                console.log("HERO IS DEAD")
            }
        }
    }

    spottedHero() {
        for (let index = 0; index < this.villains.length; index++) {
            const villain = this.villains[index];
            if (villain.isHeroSpotted(villain.herox, villain.heroy, villain)) {
                // console.log("HERO SPOTTED")
                villain.aggroFlying();

            } else {
                villain.regularFlying();
                // console.log("NORMAL FLY")
    
            }
        }
    }

    showHeroHealthAndArmor(){
        this.ctxInfo.font = "20px Arial";
        this.ctxInfo.fillStyle = "white";
        this.ctxInfo.fillText(`${this.hero.health}`, 85, 25);
        this.ctxInfo.fillText(`${this.hero.armor}`, 85, 85);
    }
    
    animate(){
        this.ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.ctxInfo.clearRect(75, 0, 150, 120);
        this.addBullets();
        this.updateVillainBulletsOnScreen();
        this.removeBullets();
        this.checkHeroCollision();
        this.checkHeroToVillainCollision();
        this.checkVillainBulletCollision();
        this.checkHeroBulletCollision();
        this.spottedHero();
        // console.log(this.allObjects());
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
        this.showHeroHealthAndArmor();
        requestAnimationFrame(this.animate);
    }

    restartGame(){
        this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
}

export default Game;