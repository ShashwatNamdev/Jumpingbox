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
Surface1.shapeColour = "green";
Surface2 = createSprite(300,590,180,30);
Surface2.shapeColour = "red";
Surface3 = createSprite(500,590,180,30);
Surface3.shapeColour = "blue";
Surface4 = createSprite(700,590,180,30);
Surface4.shapeColour = "orange";

    //create box sprite and give velocity
Box = createSprite(600,300,40,40);
Box.shapeColour = "white";
Box.velocityY = 6;
Box.velocityX = -8;
}

function draw() {
    background("white");

    createEdgeSprites();
    // Box.bounceOff(edges);

drawSprites();
    //add condition to check if box touching surface and make it box
}
