function startGame() {
    myGameArea.start();
    myGamePiece = new component(20, 10, "red", 10, 10);
    myGameObstacles[0] = new component(10, 30, "green", 30, 10);
    myGameObstacles[1] = new component(60, 30, "green", 30, 10);
    myGameObstacles[2] = new component(110, 30, "green", 30, 10);
    myGameObstacles[3] = new component(160, 30, "green", 30, 10);
    myGameObstacles[4] = new component(210, 30, "green", 30, 10);
    myGameObstacles[5] = new component(10, 70, "orange", 30, 10);
    myGameObstacles[6] = new component(60, 70, "orange", 30, 10);
    myGameObstacles[7] = new component(110, 70, "orange", 30, 10);
    myGameObstacles[8] = new component(160, 70, "orange", 30, 10);
    myGameObstacles[9] = new component(210, 70, "orange", 30, 10);
    myGameObstacles[10] = new component(10, 110, "lime", 30, 10);
    myGameObstacles[11] = new component(60, 110, "lime", 30, 10);
    myGameObstacles[12] = new component(110, 110, "lime", 30, 10);
    myGameObstacles[13] = new component(160, 110, "lime", 30, 10);
    myGameObstacles[14] = new component(210, 110, "lime", 30, 10);
    myGameObstacles[15] = new component(10, 150, "darksalmon", 30, 10);
    myGameObstacles[16] = new component(60, 150, "darksalmon", 30, 10);
    myGameObstacles[17] = new component(110, 150, "darksalmon", 30, 10);
    myGameObstacles[18] = new component(160, 150, "darksalmon", 30, 10);
    myGameObstacles[19] = new component(210, 150, "darksalmon", 30, 10);
    myGameObstacles[20] = new component(20, 190, "lightblue", 220, 10);
    endObstacle = new component(180, 240, "green", 60, 20);

}

function updateGameArea() {
    var i = 0;
    var h = 1;
    for (i = 0; i < myGameObstacles.length; i++) {
        if (myGamePiece.crashWith(myGameObstacles[i])) {
            myGameArea.stop();
            alert("GAME OVER > RESTART");

        }
        if (myGamePiece.crashWith(endObstacle)) {
            if (h <= 1) {
                myGameArea.stop();
                alert("Congrats Game Finished");
            }++h;
        }
    }

    myGameArea.clear();
    myGamePiece.speedX = 0;
    myGamePiece.speedY = 0;
    if (myGameArea.keys && myGameArea.keys[37])
        myGamePiece.speedX = -2;
    if (myGameArea.keys && myGameArea.keys[38])
        myGamePiece.speedY = -2;
    if (myGameArea.keys && myGameArea.keys[39])
        myGamePiece.speedX = 2;
    if (myGameArea.keys && myGameArea.keys[40])
        myGamePiece.speedY = 2;
    myGamePiece.speedx += myGamePiece.speedX;
    myGamePiece.speedy += myGamePiece.speedY;

    myGameArea.frameNo += 1;
    if (myGameArea.frameNo == 1 || everyinterval(58)) {
        var x = myGameArea.canvas.width;
        var minHeight = 20;
        var maxHeight = 200;
        var height = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight);
        var minGap = 50;
        var maxGap = 200;
        var gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
        /*myGameObstacles.push(new component(10,height,"green",x,0));
 
 myGameObstacles.push(new component(10,x-height-gap,"green",x,height+gap));
*/
        myGameObstacles.push(new component(260, 30, "green", 30, 10));
        myGameObstacles.push(new component(260, 70, "orange", 30, 10));
        myGameObstacles.push(new component(260, 110, "lime", 30, 10));
        myGameObstacles.push(new component(260, 150, "darksalmon", 30, 10));
        myGameObstacles.push(new component(260, 190, "lightblue", 20, 10));
    }
    if (myGameArea.frameNo == 1 || everyinterval(150))
        myGameObstacles.push(new component(260, 230, "hotpink", 120, 10));


    var f = 0;
    for (f = 0; f < myGameObstacles.length; f++) {

        myGameObstacles[f].x += -1;

        myGameObstacles[f].update();

        endObstacle.updatee();

    }
    myGamePiece.newPos();
    myGamePiece.update();
}