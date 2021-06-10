// var canvas;
var music;

var Box;

var Surface1;
var Surface2;
var Surface3;
var Surface4;

function preload(){
music = loadSound("music.mp3");
}


function setup(){
createCanvas(800,600);
//create 4 different surfaces
Surface1 = createSprite(100,590,180,30);
Surface1.shapeColor = "green";
Surface2 = createSprite(300,590,180,30);
Surface2.shapeColor = "red";
Surface3 = createSprite(500,590,180,30);
Surface3.shapeColor = "blue";
Surface4 = createSprite(700,590,180,30);
Surface4.shapeColor = "yellow";

    //create box sprite and give velocity
Box = createSprite(600,300,40,40);

Box.velocityY = 8;
Box.velocityX = -5;
}

function draw() {
    background("white");

edges = createEdgeSprites();
    Box.bounceOff(edges);
    // Box.bounceOff(Surface1);
    // Box.bounceOff(Surface2);
    // Box.bounceOff(Surface3);
    // Box.bounceOff(Surface4);
    
drawSprites();
    //add condition to check if box touching surface and make it box
    if(Box.isTouching(Surface1)){
        Box.bounceOff(Surface1);
        Box.shapeColor = "green";
    }
    if(Box.isTouching(Surface2)){
        Box.shapeColour = "red";
        Box.velocityX = 0;
        Box.velocityY = 0;
        text("Game Over",200,200);
    }
    if(Box.isTouching(Surface3)){
        Box.bounceOff(Surface3);
        Box.shapeColor = "blue";
    }
    if(Box.isTouching(Surface4)){
        Box.bounceOff(Surface4);
        Box.shapeColor = "yellow";
    }
    
}
