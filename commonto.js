var myGameArea;
var myGamePiece;
var myGameObstacles = [];
var endObstacle;
var myGameExit;
var mySound;

myGameArea = {
    canvas: document.createElement("canvas"),
    start: function() {
        this.canvas.width = 240;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
        //this.interval=setInterval(timer,1000);
        this.interval2 = setInterval(p, 1000);

        window.addEventListener("keydown", function(e) {
                myGameArea.keys = (myGameArea.keys || []);
                myGameArea.keys[e.keyCode] = (e.type == "keydown");
            }),
            window.addEventListener("keyup", function(e) {
                myGameArea.keys[e.keyCode] = (e.type == "keydown");
            })
    },
    clear: function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop: function() {
        clearInterval(this.interval);
        clearInterval(this.interval2);
    }

}

function component(x, y, color, width, height) {
    this.x = x;
    this.y = y;
    this.speedX = 0;
    this.speedY = 0;
    this.width = width;
    this.height = height;
    this.color = color;
    /*this.update = function() {

        var ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.updatee = function() {
        var ctxx = myGameArea.context;
        ctxx.strokeStyle = color;
        ctxx.strokeRect(this.x, this.y, this.width, this.height)
        ctxx.font = "30px Courier";
        ctxx.fillText("END", 192, 260, 40);
    }

    this.newPos = function() {
        myGamePiece.x += myGamePiece.speedX;
        myGamePiece.y += myGamePiece.speedY;
    }
    this.crashWith = function(otherObj) {
        var myLeft = this.x;
        var myRight = this.x + (this.width);
        var myTop = this.y;
        var myBottom = this.y + (this.height);
        var oLeft = otherObj.x;
        var oRight = otherObj.x + otherObj.width;
        var oTop = otherObj.y;
        var oBottom = otherObj.y + otherObj.height;
        var crash = true;
        if ((myBottom < oTop) || (myTop > oBottom) || (myLeft > oRight) || (myRight < oLeft))
            crash = false;
        return crash;
    }*/
}
component.prototype.update = function() {
    var ctx = myGameArea.context;
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
}
component.prototype.updatee = function() {
    var ctxx = myGameArea.context;
    ctxx.strokeStyle = this.color;
    ctxx.strokeRect(this.x, this.y, this.width, this.height)
    ctxx.font = "30px Courier";
    ctxx.fillText("END", 192, 260, 40);
}
component.prototype.newPos = function() {
    myGamePiece.x += myGamePiece.speedX;
    myGamePiece.y += myGamePiece.speedY;
}
component.prototype.crashWith = function(otherObj) {
    var myLeft = this.x;
    var myRight = this.x + (this.width);
    var myTop = this.y;
    var myBottom = this.y + (this.height);
    var oLeft = otherObj.x;
    var oRight = otherObj.x + otherObj.width;
    var oTop = otherObj.y;
    var oBottom = otherObj.y + otherObj.height;
    var crash = true;
    if ((myBottom < oTop) || (myTop > oBottom) || (myLeft > oRight) || (myRight < oLeft))
        crash = false;
    return crash;
}
var n = 20;

function p() {
    if (n >= 0) {
        document.getElementById("time1").innerHTML = n;
        --n;
        if (n < 0) {
            myGameArea.stop();
            alert("Time Elapsed");

        }
    }
}

function sound(src)
{this.sound=document.createElement("audio");
 this.sound.src=src;
 this.sound.setAttribute("preload","auto");
 this.sound.setAttribute("controls","none");
 this.sound.style.display="none";
 document.body.appendChild(this.sound);
}
sound.prototype.play=function()
{this.sound.play();
}
sound.prototype.stop=function()
{this.sound.pause();
}
