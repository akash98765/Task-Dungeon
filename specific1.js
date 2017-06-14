 function startGame() {
     myGameArea.start();
     mySound=new sound("calmpiano.mid");
     mySound.play();
     myGamePiece = new component(20, 10, "red", 20, 20);
     myGameObstacles[0] = new component(50, 0, "green", 20, 50);
     myGameObstacles[1] = new component(100, 0, "green", 20, 50);
     myGameObstacles[2] = new component(120, 0, "green", 120, 30);
     myGameObstacles[3] = new component(0, 80, "orange", 80, 40);
     myGameObstacles[4] = new component(120, 80, "orange", 50, 40);
     myGameObstacles[5] = new component(205, 80, "orange", 40, 40);
     myGameObstacles[6] = new component(209, 30, "blue", 30, 50);
     myGameObstacles[7] = new component(0, 160, "grey", 120, 20);
     myGameObstacles[8] = new component(140, 160, "grey", 60, 20);
     myGameObstacles[9] = new component(120, 210, "purple", 160, 20);
     myGameObstacles[10] = new component(20, 210, "purple", 70, 20);
     myGameObstacles[11] = new component(0, 250, "hotpink", 60, 20);
     endObstacle = new component(180, 240, "black", 60, 20);
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
             }
             ++h;
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
                 if (f != 12)
                     myGameObstacles[f].update();
                 endObstacle.updatee();

             }

         }
     }


 }




 function next() {
     var d = document.getElementById("d1");
     var str = '<a href="dungeon2p.htm" target="_self">Go to Next Level</a>';
     d.insertAdjacentHTML("beforeend", str);
 }