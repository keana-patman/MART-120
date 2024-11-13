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
var shapeX = 50;
var shapeY = 50;
var shapespeedX;
var shapespeedY;

var shapeX2 = 550;
var shapeY2 = 550;
var shapespeedX2;
var shapespeedY2;


function setup()
{
    createCanvas(600,700);
    createCharacter(200,200);
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

    //enemy 1
    enemyObstacle1();
    enemyMovement1();

    //enemy 2
    enemyObstacle2();
    enemyMovement2();

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

function enemyObstacle1()
{
    fill(224,47,33);
    circle(shapeX,shapeY,30);
}

function enemyMovement1()
{
     //enemy speed 1
     shapespeedX = (Math.floor(Math.random()*10)+1);
     shapespeedY = (Math.floor(Math.random()*10)+1);
 
     shapeX += shapespeedX;
     shapeY += shapespeedY;
 
     //out of bounds 1
     if(shapeX > width)
     {
         shapeX = Math.floor(Math.random()*100);
     }
     else if(shapeX < 0)
     {
         shapeX = Math.floor(Math.random()*100);;
     }
     if(shapeY > height)
     {
         shapeY = 0;
     }
     else if(shapeY < 0)
     {
         shapeY = 0;
     }
}

function enemyObstacle2()
{
    fill(90,31,224);
    circle(shapeX2,shapeY2,10);
}

function enemyMovement2()
{
    shapespeedX2 = (Math.floor(Math.random()*10)+1)*-1;
    shapespeedY2 = (Math.floor(Math.random()*10)+1)*-1;

    shapeX2 += shapespeedX2;
    shapeY2 += shapespeedY2;

    //out of bounds 2
    if(shapeX2 > width)
    {
        shapeX2 = Math.floor(Math.random()*10);
    }
    else if(shapeX2 < 0)
    {
        shapeX2 = 600;
    }
    if(shapeY2 > height)
    {
        shapeY2 = 700;
    }
    else if(shapeY2 < 0)
    {
        shapeY2 = 700;
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