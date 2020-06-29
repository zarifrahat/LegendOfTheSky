!function(t){var e={};function i(n){if(e[n])return e[n].exports;var s=e[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(n,s,function(e){return t[e]}.bind(null,s));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/dist/",i(i.s=1)}([function(t,e,i){},function(t,e,i){"use strict";i.r(e);i(0);var n="src/images/hero.png";function s(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var a=function(){function t(e,i,n,s,a,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.ctx=e,this.x=i,this.y=n,this.height=4,this.width=24,this.speed=6,this.shooter=s,this.turnRate=a,this.travelDistance=r,this.drawBullet=this.drawBullet.bind(this),this.animate=this.animate.bind(this),this.animateTurn=this.animateTurn.bind(this),this.move=this.move.bind(this)}var e,i,n;return e=t,(i=[{key:"drawBullet",value:function(){var t=this,e=new Image;e.onload=function(){return t.ctx.drawImage(e,t.x,t.y,24,4)},"Hero"===this.shooter?e.src="src/images/blueshot.png":e.src="src/images/redshot.png",this.animateTurn(this.ctx,this.x,this.y,e)}},{key:"animateTurn",value:function(t,e,i,n){t.save(),t.translate(e,i),t.translate(12,2),t.rotate(this.turnRate*Math.PI/180),t.translate(-12,-2),t.drawImage(n,0,0,24,4),t.restore()}},{key:"move",value:function(){this.x+=this.speed*Math.cos(this.turnRate*Math.PI/180),this.y+=this.speed*Math.sin(this.turnRate*Math.PI/180),this.travelDistance+=1}},{key:"animate",value:function(){this.drawBullet(),this.move()}}])&&s(e.prototype,i),n&&s(e,n),t}();function r(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var l=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.ctx=e,this.x=0,this.y=100,this.height=40,this.width=56,this.health=100,this.armor=0,this.speed=2,this.turnRate=0,this.drawHero=this.drawHero.bind(this),this.animate=this.animate.bind(this),this.move=this.move.bind(this),this.shootBullet=this.shootBullet.bind(this),this.keysPressed=this.keysPressed.bind(this),this.keysUp=this.keysUp.bind(this),this.turnLeft=this.turnLeft.bind(this),this.turnRight=this.turnRight.bind(this),this.bullets=[]}var e,i,s;return e=t,(i=[{key:"drawHero",value:function(){var t=this,e=new Image;e.onload=function(){return t.ctx.drawImage(e,t.x,t.y,40,56)},e.src=n,this.animateTurn(this.ctx,this.x,this.y,e)}},{key:"animateTurn",value:function(t,e,i,n){t.save(),t.translate(e,i),t.translate(20,28),t.rotate(this.turnRate*Math.PI/180),t.translate(-20,-28),t.drawImage(n,0,0,40,56),t.restore()}},{key:"move",value:function(){this.x+=this.speed*Math.cos(this.turnRate*Math.PI/180),this.y+=this.speed*Math.sin(this.turnRate*Math.PI/180)}},{key:"turnLeft",value:function(){this.turnRate+=-6}},{key:"turnRight",value:function(){this.turnRate+=6}},{key:"keysPressed",value:function(t){90===t.keyCode&&this.shootBullet(),"Right"==t.key||"ArrowRight"==t.key?this.turnRight():"Left"!=t.key&&"ArrowLeft"!=t.key||this.turnLeft()}},{key:"keysUp",value:function(t){"Right"!=t.key&&"ArrowRight"!=t.key&&"Left"!=t.key&&"ArrowLeft"!=t.key||(this.turnRate=this.turnRate)}},{key:"animate",value:function(){this.drawHero(),this.move(),document.addEventListener("keydown",this.keysPressed),document.addEventListener("keyup",this.keysUp)}},{key:"shootBullet",value:function(){var t=new a(this.ctx,this.x,this.y,"Hero",this.turnRate,0);this.bullets.push(t)}}])&&r(e.prototype,i),s&&r(e,s),t}();function h(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var o=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.ctx=e,this.height=25,this.width=50,this.x=Math.floor(1e3*Math.random()+200),this.y=Math.floor(600*Math.random()),this.speed=.1,this.turnRate=Math.floor(10*Math.random()+1),this.drawArmor=this.drawArmor.bind(this),this.move=this.move.bind(this)}var e,i,n;return e=t,(i=[{key:"drawArmor",value:function(){var t=this,e=new Image;e.onload=function(){return t.ctx.drawImage(e,t.x,t.y,50,25)},e.src="src/images/armor.png",this.ctx.drawImage(e,this.x,this.y,50,25)}},{key:"move",value:function(){this.x+=this.speed*Math.cos(this.turnRate*Math.PI/180),this.y+=this.speed*Math.sin(this.turnRate*Math.PI/180)}},{key:"animate",value:function(){this.drawArmor(),this.move()}}])&&h(e.prototype,i),n&&h(e,n),t}();function u(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var c=function(){function t(e,i,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.ctx=e,this.herox=i,this.heroy=n,this.height=63,this.width=46,this.x=Math.floor(800*Math.random()+200),this.y=Math.floor(600*Math.random()),this.speed=1.8,this.travelDistance=0,this.turnRate=Math.floor(10*Math.random()+1),this.drawVillain=this.drawVillain.bind(this),this.move=this.move.bind(this),this.animateTurn=this.animateTurn.bind(this),this.regularFlying=this.regularFlying.bind(this),this.aggroFlying=this.aggroFlying.bind(this),this.isHeroSpotted=this.isHeroSpotted.bind(this),this.shootBullet=this.shootBullet.bind(this),this.bullets=[],this.heroCurrentlySpotted=!1}var e,i,n;return e=t,(i=[{key:"drawVillain",value:function(){var t=this,e=new Image;e.onload=function(){return t.ctx.drawImage(e,t.x,t.y,t.width,t.height)},e.src="src/images/villain.png",this.animateTurn(this.ctx,this.x,this.y,e)}},{key:"animateTurn",value:function(t,e,i,n){t.save(),t.translate(e,i),t.translate(31.5,23),t.rotate(this.turnRate*Math.PI/180),t.translate(-31.5,-23),t.drawImage(n,0,0,this.width,this.height),t.restore()}},{key:"move",value:function(){this.x+=this.speed*Math.cos(this.turnRate*Math.PI/180),this.y+=this.speed*Math.sin(this.turnRate*Math.PI/180),this.travelDistance+=1}},{key:"animate",value:function(){this.drawVillain(),this.move()}},{key:"regularFlying",value:function(){100===this.travelDistance&&(this.turnRate+=7*(Math.random()<.5?-1:1),this.travelDistance=0)}},{key:"aggroFlying",value:function(){var t=this.heroy-this.y,e=Math.sqrt(Math.pow(this.herox-this.x,2)+Math.pow(this.heroy-this.y,2));this.turnRate+=Math.asin(t/e),this.shootBullet()}},{key:"isHeroSpotted",value:function(t,e){return Math.sqrt(Math.pow(t-this.x,2)+Math.pow(e-this.y,2))<300}},{key:"shootBullet",value:function(){if(this.bullets.length<4){var t=new a(this.ctx,this.x,this.y,"Villain",this.turnRate,0);this.bullets.push(t)}}}])&&u(e.prototype,i),n&&u(e,n),t}();function d(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var f=function(){function t(e,i,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.ctx=e,this.ctxInfo=n,this.mode=i,this.gameWon=!1,this.gameLost=!1,this.x=1100,this.y=600,this.hero=new l(e),this.bullet=new a(e,0,10,"hero",0),this.bullets=this.hero.bullets,this.villainbullets=[],this.armors=[],this.armorCount=5,this.villains=[],this.villainCount=5,this.animate=this.animate.bind(this),this.allObjects=this.allObjects.bind(this),this.addBullets=this.addBullets.bind(this),this.addVillainBullets=this.addVillainBullets.bind(this),this.updateVillainBulletsOnScreen=this.updateVillainBulletsOnScreen.bind(this),this.removeBullets=this.removeBullets.bind(this),this.createArmors=this.createArmors.bind(this),this.createVillains=this.createVillains.bind(this),this.checkCollision=this.checkCollision.bind(this),this.checkBulletCollision=this.checkBulletCollision.bind(this),this.checkHeroCollision=this.checkHeroCollision.bind(this),this.checkVillainBulletCollision=this.checkVillainBulletCollision.bind(this),this.spottedHero=this.spottedHero.bind(this),this.changeDifficulty=this.changeDifficulty.bind(this),this.gameLostChecker=this.gameLostChecker.bind(this),this.gameWonChecker=this.gameWonChecker.bind(this),this.createArmors(),this.createVillains()}var e,i,n;return e=t,(i=[{key:"changeDifficulty",value:function(t){2===t?(this.villainCount=5,this.createVillains()):3===t&&(this.villainCount=10,this.createArmors(),this.createVillains())}},{key:"allObjects",value:function(){return[this.hero].concat(this.bullets,this.armors,this.villains,this.villainbullets)}},{key:"addBullets",value:function(){this.bullets=this.hero.bullets}},{key:"addVillainBullets",value:function(t){this.villainbullets=t.bullets}},{key:"updateVillainBulletsOnScreen",value:function(){var t=this;this.villains.forEach((function(e){t.addVillainBullets(e)}))}},{key:"removeBullets",value:function(){this.bullets=this.bullets.filter((function(t){return t.travelDistance<75})),this.villainbullets=this.villainbullets.filter((function(t){return t.travelDistance<75}))}},{key:"createArmors",value:function(){for(var t=0;t<this.armorCount;t++){var e=new o(this.ctx);this.armors.push(e)}}},{key:"createVillains",value:function(){for(var t=0;t<this.villainCount;t++){var e=new c(this.ctx,this.hero.x,this.hero.y);this.villains.push(e)}}},{key:"checkCollision",value:function(t,e){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))<t.width}},{key:"checkBulletCollision",value:function(t,e){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))<e.width}},{key:"checkHeroCollision",value:function(){for(var t=0;t<this.armors.length;t++){var e=this.armors[t];this.checkCollision(this.hero,e)&&(this.armors.splice(t,1),this.hero.armor+=10)}}},{key:"checkVillainBulletCollision",value:function(){for(var t=0;t<this.bullets.length;t++)for(var e=this.bullets[t],i=0;i<this.villains.length;i++){var n=this.villains[i];this.checkBulletCollision(n,e)&&(this.bullets=this.hero.bullets.splice(t,1),this.villains.splice(i,1))}}},{key:"checkHeroBulletCollision",value:function(){for(var t=[],e=0;e<this.villains.length;e++){for(var i=this.villains[e],n=0;n<i.bullets.length;n++){var s=i.bullets[n];this.checkBulletCollision(this.hero,s)&&(i.bullets.splice(n,1),this.hero.armor>0?this.hero.armor-=10:this.hero.health-=10)}t.concat(i.bullets)}this.villainbullets=t}},{key:"checkHeroToVillainCollision",value:function(){for(var t=0;t<this.villains.length;t++){var e=this.villains[t];this.checkCollision(this.hero,e)&&(this.hero.armor=0,this.hero.health=0)}}},{key:"spottedHero",value:function(){for(var t=0;t<this.villains.length;t++){var e=this.villains[t];e.isHeroSpotted(e.herox,e.heroy,e)?e.aggroFlying():e.regularFlying()}}},{key:"showHeroHealthAndArmor",value:function(){this.ctxInfo.font="20px Arial",this.ctxInfo.fillStyle="white",this.ctxInfo.fillText("".concat(this.hero.health),85,25),this.ctxInfo.fillText("".concat(this.hero.armor),85,85)}},{key:"gameWonChecker",value:function(){0===this.villains.length&&(this.gameWon=!0)}},{key:"gameLostChecker",value:function(){this.hero.health<=0&&(this.gameLost=!0)}},{key:"restartGame",value:function(){this.ctx.clearRect(0,0,1100,600)}},{key:"hideMenu",value:function(t){t.style.display="none"}},{key:"showMenu",value:function(t){t.style.display="block"}},{key:"animate",value:function(){if(this.ctx.clearRect(0,0,canvas.width,canvas.height),this.ctxInfo.clearRect(75,0,150,120),this.gameLostChecker(),this.gameWonChecker(),this.addBullets(),this.removeBullets(),this.checkHeroCollision(),this.checkHeroToVillainCollision(),this.checkVillainBulletCollision(),this.checkHeroBulletCollision(),this.spottedHero(),this.updateVillainBulletsOnScreen(),this.removeBullets(),this.allObjects().forEach((function(t){t.animate(),t.x>canvas.width&&(t.x=0),t.y>canvas.height&&(t.y=0),t.x<0&&(t.x=canvas.width),t.y<0&&(t.y=canvas.height)})),this.showHeroHealthAndArmor(),this.gameLost){this.restartGame();var t=document.getElementById("gamelost");this.showMenu(t),document.getElementById("gameMusic").pause()}else if(this.gameWon){this.restartGame();var e=document.getElementById("gamewon");this.showMenu(e),document.getElementById("gameMusic").pause()}else requestAnimationFrame(this.animate)}}])&&d(e.prototype,i),n&&d(e,n),t}();function m(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var v=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.ctx=e}var e,i,s;return e=t,(i=[{key:"writeInfo",value:function(){this.ctx.font="20px Arial",this.ctx.fillStyle="white",this.ctx.fillText("Health:",5,25),this.ctx.fillText("Armor:",5,85),this.ctx.fillText("____________",5,125),this.ctx.fillText("Hero",5,170),this.ctx.fillText("Enemy",5,230),this.ctx.fillText("Armor",5,290),this.ctx.fillText("____________",5,310),this.ctx.fillText("Controls",5,340),this.ctx.fillText("Turn          Turn",5,465),this.ctx.fillText("Left          Right",7,485),this.ctx.fillText("Shoot",50,570)}},{key:"drawHero",value:function(){var t=this,e=new Image;e.onload=function(){return t.ctx.drawImage(e,75,130,40,56)},e.src=n,this.ctx.drawImage(e,75,130,40,56)}},{key:"drawVillain",value:function(){var t=this,e=new Image;e.onload=function(){return t.ctx.drawImage(e,80,195,40,56)},e.src="src/images/villain.png",this.ctx.drawImage(e,80,195,40,56)}},{key:"drawArmor",value:function(){var t=this,e=new Image;e.onload=function(){return t.ctx.drawImage(e,70,270,50,25)},e.src="src/images/armor.png",this.ctx.drawImage(e,70,270,50,25)}},{key:"drawDPAD",value:function(){var t=this,e=new Image;e.onload=function(){return t.ctx.drawImage(e,10,360,124.5,85.125)},e.src="src/images/dpad.png",this.ctx.drawImage(e,10,360,124.5,85.125)}},{key:"drawZKEY",value:function(){var t=this,e=new Image;e.onload=function(){return t.ctx.drawImage(e,55,510,39,42)},e.src="src/images/zkey.png",this.ctx.drawImage(e,55,510,39,42)}},{key:"showImages",value:function(){this.drawHero(),this.drawVillain(),this.drawArmor(),this.drawDPAD(),this.drawZKEY()}},{key:"animate",value:function(){this.showImages(),this.writeInfo()}}])&&m(e.prototype,i),s&&m(e,s),t}();document.addEventListener("DOMContentLoaded",(function(){var t=document.getElementById("canvasLeft").getContext("2d");new v(t).animate();var e=document.getElementById("canvasBackground").getContext("2d"),i=new Image;i.onload=function(){return e.drawImage(i,0,0,3e3,2e3,0,0,1200,800)},i.src="src/images/sky.jpg";var n=document.getElementById("canvas").getContext("2d"),s=document.getElementById("menu"),a=document.getElementById("prologue"),r=document.getElementById("gamelost"),l=document.getElementById("gamewon"),h=document.getElementById("credits");function o(t){t.style.display="none"}function u(t){t.style.display="block"}document.getElementById("soundon"),document.getElementById("soundoff");u(a),document.querySelectorAll(".play")[0].addEventListener("click",(function(){o(a),u(s)})),document.querySelectorAll(".restart")[0].addEventListener("click",(function(){o(r),o(l),u(s)})),document.querySelectorAll(".restart")[1].addEventListener("click",(function(){o(r),o(l),u(s)})),document.querySelectorAll(".restart")[2].addEventListener("click",(function(){o(h),u(s)})),document.querySelectorAll(".credits")[0].addEventListener("click",(function(){o(r),o(l),u(h)})),document.querySelectorAll(".easy")[0].addEventListener("click",(function(){var e=new f(n,1,t);o(s),e.animate();var i=document.getElementById("gameMusic");i.loop=!0,i.load(),i.play(),console.log("END OF LOOP")})),document.querySelectorAll(".medium")[0].addEventListener("click",(function(){var e=new f(n,2,t);o(s),e.changeDifficulty(2),e.animate();var i=document.getElementById("gameMusic");i.loop=!0,i.load(),i.play()})),document.querySelectorAll(".hard")[0].addEventListener("click",(function(){var e=new f(n,3,t);o(s),e.changeDifficulty(3),e.animate();var i=document.getElementById("gameMusic");i.loop=!0,i.load(),i.play()}))}))}]);
//# sourceMappingURL=main.js.map