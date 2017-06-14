function startGame() {
    myGameArea.start();
    myGamePiece = new component(5, 5, "red", 20, 20);
    myGameObstacles[0] = new component(70, 0, "green", 10, 60);
    myGameObstacles[1] = new component(45, 50, "green", 75, 10);
    myGameObstacles[2] = new component(30, 20, "green", 50, 10);
    myGameObstacles[3] = new component(0, 80, "orange", 20, 10);
    myGameObstacles[4] = new component(50, 60, "orange", 10, 50);
    myGameObstacles[5] = new component(105, 60, "orange", 10, 100);
    myGameObstacles[6] = new component(35, 140, "blue", 70, 10);
    myGameObstacles[7] = new component(45, 150, "grey", 10, 60);
    myGameObstacles[8] = new component(25, 200, "darksalmon", 20, 10);
    myGameObstacles[9] = new component(80, 210, "purple", 20, 59);
    myGameObstacles[10] = new component(80, 210, "purple", 70, 20);
    myGameObstacles[11] = new component(150, 40, "hotpink", 20, 170);
    myGameObstacles[12] = new component(150, 0, "lime", 20, 15);
    endObstacle = new component(180, 240, "black", 60, 20);
    myGameObstacles[13] = new component(200, 0, "teal", 40, 240);

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
                alert("Congrats");

                next();
            }++h;
        } else {
            myGameArea.clear();
            myGamePiece.speedX = 0;
            myGamePiece.speedY = 0;
            if (myGameArea.keys && myGameArea.keys[37])
                myGamePiece.speedX = -.1;
            if (myGameArea.keys && myGameArea.keys[38])
                myGamePiece.speedY = -.1;
            if (myGameArea.keys && myGameArea.keys[39])
                myGamePiece.speedX = .1;
            if (myGameArea.keys && myGameArea.keys[40])
                myGamePiece.speedY = .1;
            myGamePiece.speedx += myGamePiece.speedX;
            myGamePiece.speedy += myGamePiece.speedY;
            myGamePiece.newPos();
            myGamePiece.update();

            var f = 0;
            for (f = 0; f < myGameObstacles.length; f++) {

                myGameObstacles[f].update();

                endObstacle.updatee();
            }

        }
    }


}

function next() {
    var d = document.getElementById("d1");
    var str = '<a href="dungeon311.htm" target="_self">Go to Next Level</a>';
    d.insertAdjacentHTML("beforeend", str);
}