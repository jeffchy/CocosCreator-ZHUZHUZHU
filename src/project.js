require=function e(t,i,s){function n(o,a){if(!i[o]){if(!t[o]){var r="function"==typeof require&&require;if(!a&&r)return r(o,!0);if(c)return c(o,!0);var h=new Error("Cannot find module '"+o+"'");throw h.code="MODULE_NOT_FOUND",h}var u=i[o]={exports:{}};t[o][0].call(u.exports,function(e){var i=t[o][1][e];return n(i?i:e)},u,u.exports,e,t,i,s)}return i[o].exports}for(var c="function"==typeof require&&require,o=0;o<s.length;o++)n(s[o]);return n}({HelloWorld:[function(e,t,i){"use strict";cc._RFpush(t,"280c3rsZJJKnZ9RqbALVwtK","HelloWorld");var s=e("difficulty");cc.Class({"extends":cc.Component,properties:{label:{"default":null,type:cc.Label},openAudio:{"default":null,url:cc.AudioClip},happy:{"default":null,type:cc.Node},text:"MyGame"},onLoad:function(){this.node.setOpacity(0),this.node.runAction(cc.fadeIn(1)),cc.audioEngine.playMusic(this.openAudio,!0),console.log("play"),this.happy.active=s.reveal,s.reveal&&(this.text="Happy Birthday"),this.label.string=this.text},goHelpScene:function(){this.node.runAction(cc.sequence(cc.fadeOut(1.5),cc.delayTime(1),cc.callFunc(function(){cc.director.loadScene("helpScene")})))},goGameScene:function(){this.node.runAction(cc.sequence(cc.fadeOut(1.5),cc.delayTime(1),cc.callFunc(function(){cc.director.loadScene("gameScene")})))},goAboutScene:function(){this.node.runAction(cc.sequence(cc.fadeOut(1.5),cc.delayTime(1),cc.callFunc(function(){cc.director.loadScene("aboutScene")})))},goSettingScene:function(){this.node.runAction(cc.sequence(cc.fadeOut(1.5),cc.delayTime(1),cc.callFunc(function(){cc.director.loadScene("settingScene")})))},update:function(e){}}),cc._RFpop()},{difficulty:"difficulty"}],LOG:[function(e,t,i){"use strict";cc._RFpush(t,"ad909diXHpK/qOFCMY+FfSp","LOG"),cc.Class({"extends":cc.Component,properties:{},onLoad:function(){}}),cc._RFpop()},{}],aboutScene:[function(e,t,i){"use strict";cc._RFpush(t,"66066sfb7tKIrgXcqlubzyF","aboutScene"),cc.Class({"extends":cc.Component,properties:{isFirstload:!0},onLoad:function(){cc.game.addPersistRootNode(this.Canvas),this.node.setOpacity(0),this.node.runAction(cc.fadeIn(5))},goOpenScene:function(){this.node.runAction(cc.sequence(cc.fadeOut(1),cc.callFunc(function(){cc.director.loadScene("openScene")})))}}),cc._RFpop()},{}],background:[function(e,t,i){"use strict";cc._RFpush(t,"45722rNvTJEm7wAyOJRNkhC","background"),cc.Class({"extends":cc.Component,properties:{},onLoad:function(){this.bgPictures=new Array,this.bgPictures[0]="Texture/Background/snow.jpg",this.bgPictures[1]="Texture/Background/paris.jpg",this.bgPictures[2]="Texture/Background/mona.jpg",this.bgPictures[3]="Texture/Background/dibai.jpg",this.bgPictures[4]="Texture/Background/space.jpg",this.bgDark=new Array,this.bgDark[0]="Texture/dark/flower_dark.jpg",this.bgDark[1]="Texture/dark/nkg_dark.jpg",this.bgDark[2]="Texture/dark/shanghai_dark.jpg",this.bgDark[3]="Texture/dark/sky_dark.jpg",this.bgDark[4]="Texture/dark/shanghai.jpg",this.bgDark[5]="Texture/dark/raining.jpg",this.bgDark[6]="Texture/dark/raining_happy.jpg"},changeBgRandomly:function(){this.node.setOpacity(0);var e=Math.floor(4*Math.random()),t=cc.url.raw(this.bgPictures[e]),i=cc.textureCache.addImage(t);this.getComponent(cc.Sprite).spriteFrame.setTexture(i),this.node.runAction(cc.fadeIn(5))},changeDarkBg:function(e){this.node.setOpacity(0);var t=cc.url.raw(this.bgDark[e]),i=cc.textureCache.addImage(t);this.getComponent(cc.Sprite).spriteFrame.setTexture(i),this.node.runAction(cc.fadeIn(5))}}),cc._RFpop()},{}],difficulty:[function(e,t,i){"use strict";cc._RFpush(t,"b73da9bvFNKsrFm+3ewAvIL","difficulty"),t.exports={difficulty:0,reveal:0,totalTimer:0,score:0},cc._RFpop()},{}],doctor:[function(e,t,i){"use strict";cc._RFpush(t,"3971bw4o8VJzZ27oQHP0Kci","doctor"),cc.Class({"extends":cc.Component,properties:{doctorDuration:0,pickRadius:0,lastTimeScale:0,isSallyPick:1},onLoad:function(){this.spawnTimer=0},getPlayerDistance:function(){var e=this.game.player.getPosition(),t=this.game.player_jeff.getPosition(),i=cc.pDistance(this.node.position,e),s=cc.pDistance(this.node.position,t);return i<s?(this.isSallyPick=1,i):(this.isSallyPick=0,s)},onPicked:function(){this.isSallyPick?this.game.sallyGainDoctor():this.game.jeffGainDoctor(),this.node.destroy()},update:function(e){var t=1-this.spawnTimer/this.doctorDuration,i=50;this.node.opacity=i+Math.floor(t*(255-i)),this.getPlayerDistance()<this.pickRadius&&this.onPicked(),this.spawnTimer+=e,this.spawnTimer>this.doctorDuration&&(this.spawnTimer=0,this.node.destroy())}}),cc._RFpop()},{}],finishScene:[function(e,t,i){"use strict";cc._RFpush(t,"dcfa1H6FOFBZZz7+B44qLei","finishScene");var s=e("difficulty");cc.Class({"extends":cc.Component,properties:{mylabel:{"default":null,type:cc.Label},audio1:{"default":null,url:cc.AudioClip}},onLoad:function(){cc.audioEngine.playMusic(this.audio1);var e,t,i=new Array("SSS","S","A","B","C","D"),n=s.totalTimer,c=s.difficulty;t=c<0?"HARD":0==c?"NORMAL":"EASY",n<350?(e=i[1+c],console.log(e)):n>=350&&n<450?(e=i[2+c],console.log(e)):n>=450&&n<600?(e=i[3+c],console.log(e)):n>=600&&(e=i[4+c],console.log(e)),this.mylabel.string="SCORE "+s.score.toString()+"  TIME"+s.totalTimer.toFixed(0)+"\n"+t+"  "+e;var o=this.getComponent(cc.Animation);o.play("finish"),this.scheduleOnce(function(){s.reveal=1,cc.director.loadScene("openScene")},70)}}),cc._RFpop()},{difficulty:"difficulty"}],gameScene:[function(require,module,exports){"use strict";cc._RFpush(module,"368e9IsanBFvarFRnHYjQL1","gameScene");var mydiff=require("difficulty");cc.Class({"extends":cc.Component,properties:{musicNote:{"default":null,type:cc.Node},up:{"default":null,type:cc.Node},conflict:{"default":null,type:cc.Node},down:{"default":null,type:cc.Node},time:{"default":null,type:cc.Label},infoLabel:{"default":null,type:cc.Label},helpLabel:{"default":null,type:cc.Label},background:{"default":null,type:cc.Node},player:{"default":null,type:cc.Node},player_jeff:{"default":null,type:cc.Node},stageDisplay:{"default":null,type:cc.Label},starPrefeb:{"default":null,type:cc.Prefab},rosePrefeb:{"default":null,type:cc.Prefab},sorrowPrefeb:{"default":null,type:cc.Prefab},scoreDisplay:{"default":null,type:cc.Label},scoreAudio:{"default":null,url:cc.AudioClip},punishAudio:{"default":null,url:cc.AudioClip},interimAudio:{"default":null,url:cc.AudioClip},doctorPrefeb:{"default":null,type:cc.Prefab},guitarPrefeb:{"default":null,type:cc.Prefab},pcPrefeb:{"default":null,type:cc.Prefab},heartPrefeb:{"default":null,type:cc.Prefab},yslPrefeb:{"default":null,type:cc.Prefab},progressBar:{"default":null,type:cc.ProgressBar},myAudio1:{"default":null,url:cc.AudioClip},myAudio2:{"default":null,url:cc.AudioClip},myAudio3:{"default":null,url:cc.AudioClip},myAudio4:{"default":null,url:cc.AudioClip},barvol:1119,starDuration:3,scaler:1,changeGap:30},onLoad:function(){this.totalTimer=0,this.starDuration+=2*mydiff.difficulty,console.log(this.starDuration),this.finishflag=!1,this.mystring="Ms. Pink\nleft a / right d / jump w\npress yellow buttom to continue",this.musicArr=new Array,this.musicArr[1]=this.myAudio1,this.musicArr[2]=this.myAudio2,this.musicArr[3]=this.myAudio3,this.musicArr[4]=this.myAudio4,this.node.setOpacity(0),this.node.runAction(cc.fadeIn(5)),this.isJeffActive=!1,this.progressBar.progress=0,this.player_jeff.active=!1,this.groundY=-175,this.itemTimer=0,this.itemOccurTime=0,this.sorrowOccurTime=0,this.roseOccurTime=0,this.spawnNewStar(),this.hide=!1,this.score=0,this.scoretemp=0,this.stage=1,this.changeflag=!1,this.animflag=!0,this.anim2flag=!0,this.itemList=new Array("doctorPrefeb","pcPrefeb","guitarPrefeb","yslPrefeb"),this.dotX=new Array((-1),34,59,87,99,81,45,0,(-45),(-89),(-99),(-80),(-52),(-23)),this.dotY=new Array((-90),(-63),(-41),(-10),28,75,92,74,91,66,22,(-20),(-47),(-70))},controlHelp:function(){cc.director.pause(),this.helpLabel.string=this.mystring},spawnNewStar:function(){var e=cc.instantiate(this.starPrefeb);this.node.addChild(e),e.setPosition(this.getNewStarPosition()),e.getComponent("star").game=this},getNewStarPosition:function(){var e=this.node.width/2*cc.randomMinus1To1(),t=this.groundY+170*cc.random0To1()+50;return cc.p(e,t)},gainScore:function(){this.score+=5,this.scoreDisplay.string="Score "+this.score.toString();var e=this.progressBar.getComponent(cc.Animation);e.play("progress")},gainYsl:function(){this.score+=100;var e=this.progressBar.getComponent(cc.Animation);e.play("progress");var e=this.up.getComponent(cc.Animation);e.play("up"),cc.audioEngine.playEffect(this.scoreAudio,!1),this.scoreDisplay.string="Score "+this.score.toString(),this.player.getComponent("sally").jumpHeight=300,this.player_jeff.getComponent("jeff").jumpHeight=300,this.scheduleOnce(function(){this.player.getComponent("sally").jumpHeight=200,this.player_jeff.getComponent("jeff").jumpHeight=200},15),console.log("hehe")},gainSorrow:function(){this.score-=10;var e=this.conflict.getComponent(cc.Animation);e.play("fliping"),cc.audioEngine.playEffect(this.punishAudio,!1);var e=this.progressBar.getComponent(cc.Animation);e.play("progress"),this.player.getComponent("sally").speedScale=-1,this.player_jeff.getComponent("jeff").speedScale=-1,this.scoreDisplay.string="Score "+this.score.toString(),this.scheduleOnce(function(){this.player_jeff.getComponent("jeff").speedScale=1,this.player.getComponent("sally").speedScale=1},4),console.log("sorrow")},gainRose:function(){var e=0,t=.3,i=13;this.schedule(function(){var t=cc.instantiate(this.heartPrefeb);this.node.addChild(t),t.setPosition(cc.p(this.dotX[e],this.dotY[e])),e+=1,t.getComponent("redheart").game=this,cc.audioEngine.playEffect(this.scoreAudio,!1)},t,i),console.log("rose")},gainGuitar:function(){this.score+=10,cc.audioEngine.playEffect(this.scoreAudio,!1);var e=this.progressBar.getComponent(cc.Animation);e.play("progress");var e=this.musicNote.getComponent(cc.Animation);e.play("music"),this.scoreDisplay.string="Score "+this.score.toString(),this.changeMusic(),console.log("guitar")},jeffGainPc:function(){this.score+=10;var e=this.progressBar.getComponent(cc.Animation);e.play("progress");var e=this.up.getComponent(cc.Animation);e.play("up"),this.scoreDisplay.string="Score "+this.score.toString(),cc.audioEngine.playEffect(this.scoreAudio,!1),this.player_jeff.getComponent("jeff").speedScale=5,this.scheduleOnce(function(){this.player_jeff.getComponent("jeff").speedScale=1},10)},sallyGainPc:function(){cc.audioEngine.playEffect(this.punishAudio,!1);var e=this.down.getComponent(cc.Animation);e.play("down"),this.player.getComponent("sally").speedScale=.1,this.scheduleOnce(function(){this.player.getComponent("sally").speedScale=1},8)},jeffGainDoctor:function(){cc.audioEngine.playEffect(this.punishAudio,!1);var e=this.down.getComponent(cc.Animation);e.play("down"),this.player_jeff.getComponent("jeff").speedScale=.1,this.scheduleOnce(function(){this.player_jeff.getComponent("jeff").speedScale=1},8)},sallyGainDoctor:function(){cc.audioEngine.playEffect(this.scoreAudio,!1);var e=this.up.getComponent(cc.Animation);e.play("up");var e=this.progressBar.getComponent(cc.Animation);e.play("progress"),this.score+=10,this.scoreDisplay.string="Score "+this.score.toString(),this.player.getComponent("sally").speedScale=5,this.scheduleOnce(function(){this.player.getComponent("sally").speedScale=1},10)},spawnNewItemsRandomly:function spawnNewItemsRandomly(){var index=Math.floor(4*Math.random()),newItem=cc.instantiate(eval("this."+this.itemList[index]));this.node.addChild(newItem),newItem.setPosition(this.getNewItemPosition()),newItem.getComponent(this.itemList[index].slice(0,-6)).game=this,this.itemTimer=0},spawnNewItemsByIndex:function spawnNewItemsByIndex(index){var newItem=cc.instantiate(eval("this."+this.itemList[index]));this.node.addChild(newItem),newItem.setPosition(this.getNewItemPosition()),newItem.getComponent(this.itemList[index].slice(0,-6)).game=this,this.itemTimer=0},spawnNewSorrow:function(){var e=cc.instantiate(this.sorrowPrefeb);this.node.addChild(e),e.setPosition(this.getNewStarPosition()),e.getComponent("sorrow").game=this,this.itemTimer=0},spawnNewRose:function(){var e=cc.instantiate(this.rosePrefeb);this.node.addChild(e),e.setPosition(this.getNewStarPosition()),e.getComponent("rose").game=this,this.itemTimer=0},getNewItemPosition:function(){var e=this.node.width/2*cc.randomMinus1To1(),t=this.groundY+cc.random0To1()*this.player.getComponent("sally").jumpHeight*.6+50;return cc.p(e,t)},gamePause:function(){cc.director.pause(),this.infoLabel.string="PAUSED"},gameStart:function(){cc.director.resume(),this.helpLabel.string="",this.infoLabel.string=""},changeMusic:function(){if(this.stage>4){var e=Math.floor(4*Math.random())+1;cc.audioEngine.playMusic(this.musicArr[e],!0)}},lostStar:function(){var e=this.progressBar.getComponent(cc.Animation);e.play("progress"),cc.audioEngine.playEffect(this.punishAudio,!1),this.score*=.9,this.score=parseInt(this.score),this.scoreDisplay.string="Score "+this.score.toString()},update:function(e){if(this.totalTimer+=e,this.time.string="Time "+this.totalTimer.toFixed(0).toString(),this.progressBar.progress=this.score/this.barvol,this.score>1119&&!this.finishflag&&(mydiff.score=this.score,cc.director.loadScene("finishScene"),mydiff.totalTimer=this.totalTimer,console.log(mydiff.totalTimer),this.finishflag=!0),4==this.stage&&this.animflag){cc.audioEngine.playMusic(this.interimAudio),this.mystring="Ms. Pink\nleft a / right d / jump w\nMr. Blue\nleft j / right l / jump i\npress yellow buttom to continue",this.hide=!0,this.scorerecord=this.score,this.player_jeff.active=!0;var t=this.getComponent(cc.Animation);t.play("scene"),console.log("play"),this.animflag=!1,this.bg=this.background.getComponent("background"),this.scheduleOnce(function(){this.bg.changeDarkBg(4),this.spawnNewStar(),this.hide=!1},65)}if(10==this.stage&&this.anim2flag){cc.audioEngine.playMusic(this.interimAudio),this.hide=!0,this.bg.changeDarkBg(5),this.scorerecord=this.score;var t=this.getComponent(cc.Animation);t.play("sad"),console.log("play2"),this.anim2flag=!1,this.bg=this.background.getComponent("background"),this.scheduleOnce(function(){this.bg.changeDarkBg(6)},37),this.scheduleOnce(function(){this.spawnNewStar(),this.hide=!1},45)}this.hide||(this.score-this.scoretemp>this.changeGap&&(this.scoretemp=this.score,this.changeflag=!0),this.changeflag&&(this.stage>=4?(this.stage+=1,this.stageDisplay.string="Stage "+this.stage.toString(),console.log(this.stage),this.bg=this.background.getComponent("background"),this.bg.changeBgRandomly(),this.changeflag=!1):(this.stage+=1,this.stageDisplay.string="Stage "+this.stage.toString(),console.log(this.stage),this.bg=this.background.getComponent("background"),this.bg.changeDarkBg(this.stage-2),this.changeflag=!1)),this.itemTimer+=e,this.itemOccurTime+=e,this.sorrowOccurTime+=e,this.roseOccurTime+=e,this.stage>=4&this.itemOccurTime>5*cc.random0To1()+10&&(this.spawnNewItemsRandomly(),this.itemOccurTime=0),this.stage<4&this.itemOccurTime>10*cc.random0To1()+10&&(this.spawnNewItemsByIndex(0),this.itemOccurTime=0),this.sorrowOccurTime>5*cc.random0To1()+10&&(this.spawnNewSorrow(),console.log("spawnSorrow"),this.sorrowOccurTime=0),this.stage>=10&this.roseOccurTime>3*cc.random0To1()+3&&(this.spawnNewRose(),console.log("spawnNewRose"),this.roseOccurTime=0))}}),cc._RFpop()},{difficulty:"difficulty"}],guitar:[function(e,t,i){"use strict";cc._RFpush(t,"3ebed3axZRM7IPQpFagPJg9","guitar"),cc.Class({"extends":cc.Component,properties:{guitarDuration:0,pickRadius:0,lastTimeScale:0},onLoad:function(){this.spawnTimer=0},getPlayerDistance:function(){var e=this.game.player.getPosition(),t=this.game.player_jeff.getPosition(),i=Math.min(cc.pDistance(this.node.position,e),cc.pDistance(this.node.position,t));return i},onPicked:function(){this.game.gainGuitar(),this.node.destroy()},update:function(e){var t=1-this.spawnTimer/this.guitarDuration,i=50;this.node.opacity=i+Math.floor(t*(255-i)),this.getPlayerDistance()<this.pickRadius&&this.onPicked(),this.spawnTimer+=e,this.spawnTimer>this.guitarDuration&&(this.spawnTimer=0,this.node.destroy())}}),cc._RFpop()},{}],happy:[function(e,t,i){"use strict";cc._RFpush(t,"68ad00nRwRJFZ3V4fisI0SY","happy"),cc.Class({"extends":cc.Component,properties:{},onLoad:function(){}}),cc._RFpop()},{}],helpScene:[function(e,t,i){"use strict";cc._RFpush(t,"adc74ktQGFE3oF++RuLd5DQ","helpScene"),cc.Class({"extends":cc.Component,properties:{},goOpenScene:function(){this.node.runAction(cc.sequence(cc.fadeOut(1),cc.callFunc(function(){cc.director.loadScene("openScene")})))},onLoad:function(){this.node.setOpacity(0),this.node.runAction(cc.fadeIn(5))}}),cc._RFpop()},{}],jeff:[function(e,t,i){"use strict";cc._RFpush(t,"98cdbMVMThPOomWue8bwTQP","jeff"),cc.Class({"extends":cc.Component,properties:{jumpHeight:0,jumpDuration:0,speedScale:1,sizeScale:1,accel:1,maxspeed:120,minspeed:60,xSpeed:60,jumpAudio:{"default":null,url:cc.AudioClip}},JumpAction:function(){var e=cc.moveBy(this.jumpDuration,cc.p(0,this.jumpHeight)).easing(cc.easeCubicActionOut()),t=cc.moveBy(this.jumpDuration,cc.p(0,-this.jumpHeight)).easing(cc.easeCubicActionIn()),i=cc.callFunc(this.playJumpSound,this);return cc.sequence(i,e,t)},playJumpSound:function(){cc.audioEngine.playEffect(this.jumpAudio,!1)},setInputControl:function(){var e=this;cc.eventManager.addListener({event:cc.EventListener.KEYBOARD,onKeyPressed:function(t,i){switch(t){case cc.KEY.j:e.moveRight=!1,e.moveLeft=!0;break;case cc.KEY.l:e.moveLeft=!1,e.moveRight=!0;break;case cc.KEY.i:e.jump=!0}},onKeyReleased:function(t,i){switch(t){case cc.KEY.j:e.moveLeft=!1;break;case cc.KEY.l:e.moveRight=!1;break;case cc.KEY.i:e.jump=!1}}},e.node)},onLoad:function(){this.winSize=cc.director.getWinSize(),this.JumpAction=this.JumpAction(),this.moveLeft=!1,this.moveRight=!1,this.jump=!1,this.setInputControl(),this.timer=0},update:function(e){this.timer+=e,this.moveLeft&this.node.x>-this.winSize.width/2+20?(this.node.setScale(1,1),this.xSpeed>=this.minspeed&&(this.xSpeed+=this.accel*e),this.node.runAction(cc.moveBy(e,cc.p(this.xSpeed*-1*this.speedScale*e,0)))):this.moveRight&this.node.x<this.winSize.width/2-20&&(this.node.setScale(-1,1),this.xSpeed<this.maxspeed&&(this.xSpeed+=this.accel*e),this.node.runAction(cc.moveBy(e,cc.p(this.xSpeed*this.speedScale*e,0)))),this.node.x>this.winSize.width/2|this.node.x<-this.winSize.width/2&&(this.node.x=.8*this.node.x),this.jump&this.timer>2.2&&(this.node.runAction(this.JumpAction),this.xSpeed=this.minspeed,this.jump=!1,this.timer=0)}}),cc._RFpop()},{}],pc:[function(e,t,i){"use strict";cc._RFpush(t,"40fbeb6mkBPfppn2ZBpKzxd","pc"),cc.Class({"extends":cc.Component,properties:{pcDuration:0,pickRadius:0,lastTimeScale:0,isSallyPick:1},onLoad:function(){this.spawnTimer=0},getPlayerDistance:function(){var e=this.game.player.getPosition(),t=this.game.player_jeff.getPosition(),i=cc.pDistance(this.node.position,e),s=cc.pDistance(this.node.position,t);return i<s?(this.isSallyPick=1,i):(this.isSallyPick=0,s)},onPicked:function(){this.isSallyPick?this.game.sallyGainPc():this.game.jeffGainPc(),this.node.destroy()},update:function(e){var t=1-this.spawnTimer/this.pcDuration,i=50;this.node.opacity=i+Math.floor(t*(255-i)),this.getPlayerDistance()<this.pickRadius&&this.onPicked(),this.spawnTimer+=e,this.spawnTimer>this.pcDuration&&(this.spawnTimer=0,this.node.destroy())}}),cc._RFpop()},{}],redheart:[function(e,t,i){"use strict";cc._RFpush(t,"e711bKq2LBGR6qXLBpMi9+Y","redheart"),cc.Class({"extends":cc.Component,properties:{heartDuration:0,pickRadius:0,lastTimeScale:0},onLoad:function(){this.spawnTimer=0},getPlayerDistance:function(){var e=this.game.player.getPosition(),t=this.game.player_jeff.getPosition(),i=Math.min(cc.pDistance(this.node.position,e),cc.pDistance(this.node.position,t));return i},onPicked:function(){this.game.gainScore(),this.node.destroy()},update:function(e){var t=1-this.spawnTimer/this.heartDuration,i=50;this.node.opacity=i+Math.floor(t*(255-i)),this.getPlayerDistance()<this.pickRadius&&this.onPicked(),this.spawnTimer+=e,this.spawnTimer>this.heartDuration&&(this.spawnTimer=0,this.node.destroy())}}),cc._RFpop()},{}],rose:[function(e,t,i){"use strict";cc._RFpush(t,"f7c50bgMnhIQqCQnHcRsjG7","rose"),cc.Class({"extends":cc.Component,properties:{roseDuration:0,pickRadius:0,lastTimeScale:0},onLoad:function(){this.spawnTimer=0},getPlayerDistance:function(){var e=this.game.player.getPosition(),t=this.game.player_jeff.getPosition(),i=Math.min(cc.pDistance(this.node.position,e),cc.pDistance(this.node.position,t));return i},onPicked:function(){this.game.gainRose(),this.node.destroy()},update:function(e){var t=1-this.spawnTimer/this.roseDuration,i=50;this.node.opacity=i+Math.floor(t*(255-i)),this.getPlayerDistance()<this.pickRadius&&this.onPicked(),this.spawnTimer+=e,this.spawnTimer>this.roseDuration&&(this.spawnTimer=0,this.node.destroy())}}),cc._RFpop()},{}],sally:[function(e,t,i){"use strict";cc._RFpush(t,"9c7effYHoJMW4AosmUMJCy4","sally"),cc.Class({"extends":cc.Component,properties:{jumpHeight:0,jumpDuration:0,speedScale:1,sizeScale:1,accel:1,maxspeed:120,minspeed:60,xSpeed:60,jumpAudio:{"default":null,url:cc.AudioClip}},JumpAction:function(){var e=cc.moveBy(this.jumpDuration,cc.p(0,this.jumpHeight)).easing(cc.easeCubicActionOut()),t=cc.moveBy(this.jumpDuration,cc.p(0,-this.jumpHeight)).easing(cc.easeCubicActionIn()),i=cc.callFunc(this.playJumpSound,this);return cc.sequence(i,e,t)},playJumpSound:function(){cc.audioEngine.playEffect(this.jumpAudio,!1)},setInputControl:function(){var e=this;cc.eventManager.addListener({event:cc.EventListener.KEYBOARD,onKeyPressed:function(t,i){switch(t){case cc.KEY.a:e.moveRight=!1,e.moveLeft=!0;break;case cc.KEY.d:e.moveLeft=!1,e.moveRight=!0;break;case cc.KEY.w:e.jump=!0}},onKeyReleased:function(t,i){switch(t){case cc.KEY.a:e.moveLeft=!1;break;case cc.KEY.d:e.moveRight=!1;break;case cc.KEY.w:e.jump=!1}}},e.node)},onLoad:function(){this.winSize=cc.director.getWinSize(),this.JumpAction=this.JumpAction(),this.moveLeft=!1,this.moveRight=!1,this.jump=!1,this.setInputControl(),this.timer=0},update:function(e){this.timer+=e,this.moveLeft&this.node.x>-this.winSize.width/2+20?(this.node.setScale(1,1),this.xSpeed>=this.minspeed&&(this.xSpeed+=this.accel*e),this.node.runAction(cc.moveBy(e,cc.p(this.xSpeed*-1*this.speedScale*e,0)))):this.moveRight&this.node.x<this.winSize.width/2-20&&(this.node.setScale(-1,1),this.xSpeed<this.maxspeed&&(this.xSpeed+=this.accel*e),this.node.runAction(cc.moveBy(e,cc.p(this.xSpeed*this.speedScale*e,0)))),this.node.x>this.winSize.width/2|this.node.x<-this.winSize.width/2&&(this.node.x=.8*this.node.x),this.jump&this.timer>2.2&&(this.node.runAction(this.JumpAction),this.xSpeed=this.minspeed,this.jump=!1,this.timer=0)}}),cc._RFpop()},{}],settingScene:[function(e,t,i){"use strict";cc._RFpush(t,"1c4dbmyU0BNFb2/Uaz7NXcf","settingScene");var s=e("difficulty");cc.Class({"extends":cc.Component,properties:{},onLoad:function(){cc.game.addPersistRootNode(this.Canvas),this.node.setOpacity(0),this.node.runAction(cc.fadeIn(5))},setNormal:function(){s.difficulty=0,console.log(s.difficulty)},setEasy:function(){s.difficulty=1,console.log(s.difficulty)},setHard:function(){s.difficulty=-1,console.log(s.difficulty)},goOpenScene:function(){this.node.runAction(cc.sequence(cc.fadeOut(1),cc.callFunc(function(){cc.director.loadScene("openScene")})))}}),cc._RFpop()},{difficulty:"difficulty"}],sorrow:[function(e,t,i){"use strict";cc._RFpush(t,"4c4b50WLNZNTbtfnd++zajG","sorrow"),cc.Class({"extends":cc.Component,properties:{sorrowDuration:0,pickRadius:0,lastTimeScale:0},onLoad:function(){this.spawnTimer=0},getPlayerDistance:function(){var e=this.game.player.getPosition(),t=this.game.player_jeff.getPosition(),i=Math.min(cc.pDistance(this.node.position,e),cc.pDistance(this.node.position,t));return i},onPicked:function(){this.game.gainSorrow(),this.node.destroy()},update:function(e){var t=1-this.spawnTimer/this.sorrowDuration,i=50;this.node.opacity=i+Math.floor(t*(255-i)),this.getPlayerDistance()<this.pickRadius&&this.onPicked(),this.spawnTimer+=e,this.spawnTimer>this.sorrowDuration&&(this.spawnTimer=0,this.node.destroy())}}),cc._RFpop()},{}],star:[function(e,t,i){"use strict";cc._RFpush(t,"1acdbsj0BZBdaJM2UEIL4wv","star"),cc.Class({"extends":cc.Component,properties:{pickRadius:0},onLoad:function(){this.starTimer=0},getPlayerDistance:function(){var e=this.game.player.getPosition(),t=this.game.player_jeff.getPosition(),i=Math.min(cc.pDistance(this.node.position,e),cc.pDistance(this.node.position,t));return i},onPicked:function(){this.game.spawnNewStar(),this.game.gainScore(),this.node.destroy()},onPickedLost:function(){this.game.spawnNewStar(),this.game.lostStar(),this.node.destroy()},update:function(e){this.starTimer+=e,this.game.hide||(this.getPlayerDistance()<this.pickRadius&&this.onPicked(),this.starTimer>this.game.starDuration&&(this.node.runAction(cc.sequence(cc.blink(2,3))),this.scheduleOnce(this.onPickedLost,2),this.starTimer=0))}}),cc._RFpop()},{}],ysl:[function(e,t,i){"use strict";cc._RFpush(t,"2868aR5PvpJiKebxvIFq2/y","ysl"),cc.Class({"extends":cc.Component,properties:{yslDuration:0,pickRadius:0,lastTimeScale:0},onLoad:function(){this.spawnTimer=0},getPlayerDistance:function(){var e=this.game.player.getPosition(),t=this.game.player_jeff.getPosition(),i=Math.min(cc.pDistance(this.node.position,e),cc.pDistance(this.node.position,t));return i},onPicked:function(){this.game.gainYsl(),this.node.destroy()},update:function(e){var t=1-this.spawnTimer/this.yslDuration,i=50;this.node.opacity=i+Math.floor(t*(255-i)),this.getPlayerDistance()<this.pickRadius&&this.onPicked(),this.spawnTimer+=e,this.spawnTimer>this.yslDuration&&(this.spawnTimer=0,this.node.destroy())}}),cc._RFpop()},{}]},{},["star","settingScene","HelloWorld","ysl","gameScene","doctor","guitar","pc","background","sorrow","aboutScene","happy","jeff","sally","LOG","helpScene","difficulty","finishScene","redheart","rose"]);