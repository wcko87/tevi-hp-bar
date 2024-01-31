var RES_X = 478;
var RES_Y = 99;

var mainCanvas = document.getElementById('mainCanvas');
var ctx = mainCanvas.getContext('2d');

var win = document.getElementById('window');

mainCanvas.width = RES_X;
mainCanvas.height = RES_Y;

var spriteBase = new Image();
spriteBase.src = "base.png";
var spriteBaseFG = new Image();
spriteBaseFG.src = "base_foreground.png";
var spriteHP = new Image();
spriteHP.src = "hpbar.png";

function drawHpBar(hpPercent) {
    right = 444
    left = 38
    width = (right-left)*hpPercent;
    ctx.save();
    ctx.clearRect(0, 0, RES_X, RES_Y);
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(spriteBase,0,0,RES_X,RES_Y,0,0,RES_X,RES_Y);
    //for (var x=right-width; x<right; ++x) {
        //ctx.drawImage(spriteHP,0,0,1,16,x,51,1,16);
    //}
    ctx.drawImage(spriteHP,0,0,1,16,right-width,51,width,16);
    ctx.drawImage(spriteBaseFG,0,0,RES_X,RES_Y,0,0,RES_X,RES_Y);
    ctx.restore();
}

function update(value) {
    var hpPercent = 100-value;
    document.getElementById('hpoutput').value = hpPercent;
    drawHpBar(hpPercent/100);
}