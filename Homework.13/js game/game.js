//key codes
var w = 87;
var a = 65;
var s = 83;
var d = 68;
//character x/y
var characterX = 100;
var characterY = 100;
//mouse
var mouseSx;
var mouseSy;
//shape x/y
var shapeX = [];
var shapeY = [];
var diameter = [];

var shapespeedX = [];
var shapespeedY = [];
// shape color
var r = [];
var g = [];
var b = [];

function setup()
{
    createCanvas(600,700);
    createCharacter(200,200);
    createEnemy();
}

function draw()
{
    //background
    createBackground();

    //borders
    makeBorders();

    //exit
    makeExit();

    //character
    drawCharacter();
    characterMovement();

    //mouse click shape
    createShape();

    //enemy movement
    enemyMovement();

    //character reach exit
    characterExit(); 
}

function characterMovement()
{
    if(keyIsDown(w))
    {
        characterY -= 5;
    }
    if(keyIsDown(a))
    {
        characterX -= 5;
    }
    if(keyIsDown(s))
    {
        characterY += 5;
    }
    if(keyIsDown(d))
    {
        characterX += 5;
    }
}

function makeBorders()
{
    strokeWeight(10);
    //top
    line(0,0,600,0);
    //bottom
    line(0,700,600,700);
    //left
    line(0,0,0,700);
    //right
    line(600,0,600,640);
}

function mouseClicked()
{
    mouseSx = mouseX;
    mouseSy = mouseY;
}

function createCharacter(x,y)
{
    characterX = x;
    characterY = y;
}

function drawCharacter()
{
    strokeWeight(2);
    fill(100,100,100);
    square(characterX,characterY,30);
}

function makeExit()
{
    textSize(12);
    text("EXIT ->",width-50,height-30)
}

function enemyMovement()
{
     //draw shapes
     for(var i = 0; i < shapeX.length; i++)
     {
        fill(r[i],g[i],b[i]);

        circle(shapeX[i],shapeY[i],diameter[i]);
        //enemy speed 
        shapespeedX[i] = (Math.floor(Math.random()*10)+1);
        shapespeedY[i] = (Math.floor(Math.random()*10)+1);
    
     shapeX[i] += shapespeedX[i];
     shapeY[i] += shapespeedY[i];
 
     //out of bounds 
     if(shapeX[i] > width)
     {
         shapeX[i] = Math.floor(Math.random()*100);
     }
     else if(shapeX[i] < 0)
     {
         shapeX[i] = Math.floor(Math.random()*100);;
     }
     if(shapeY[i] > height)
     {
         shapeY[i] = 0;
     }
     else if(shapeY[i] < 0)
     {
         shapeY[i] = 0;
     }
    }
}

function createEnemy()
{
    for (var i = 0; i < 7; i++)
    {
        r[i] = random(255);
        g[i] = random(255);
        b[i] = random(255);

        shapespeedX[i] = (Math.floor(Math.random()*10)+1);
        shapespeedY[i] = (Math.floor(Math.random()*10)+1);

        shapeX[i] = (Math.floor(Math.random()*100)+1)
        shapeY[i] = (Math.floor(Math.random()*100)+1)
        diameter[i] = (Math.floor(Math.random()*100)+1)
    }
}

function characterExit()
{
    if (characterX > 600 && characterY > 640)
    {
        textSize(20);
        fill(0,0,0);
        text("YOU WIN!", 250,350);
    } 
}

function createShape()
{
    fill(200,200,200);
    strokeWeight(2);
    circle(mouseSx,mouseSy,30);
}

function createBackground()
{
    background(151,197,222);
    fill(0);
}