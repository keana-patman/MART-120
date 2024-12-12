//keys
var a = 65;
var d = 68;
//characher things
var characterX = 100;
var characterY = 100;
//ball things
var shapespeedX = 0;
var shapespeedY = 0;

var shapeX = 100;
var shapeY = 300;
var diameter = 20;
//brick things
var brickX = 0;
var brickY = 0;
var bricks = [];
var score = 0;
//words
var start = "press 'e' to start!";
var win = "YOU WIN :)";
var controls = "use 'a' and 'd' to move";


function setup()
{
    createCanvas(600,600);
    createCharacter(250,500);
    createBall(0,0);
    createBricks();
}

function draw()
{
    //background
    createBackground();

    //character
    drawCharacter();
    moveCharacter();

    //ball
    moveBall();

    //initiate game over
    gameOver();

    //bricks *i used a lot of help from the internet for this part, but i understand how it works now*
    drawBricks();
    destroyBricks();

    //border
    makeBorders();

    //start
    textSize(20);
    text(start,230,350);
    textSize(10);
    text(controls,255,360);
}

//
function createCharacter(x,y)
{
    characterX = x;
    characterY = y;
}

function drawCharacter()
{
    strokeWeight(2);
    fill(255,255,255);
    rect(characterX,characterY,120,10);

    if(characterX < 0)
    {
        characterX = 0;
    }
    if(characterX > width-120)
    {
        characterX = width-120;
    }
}

function moveCharacter()
{
    
    if(keyIsDown(a))
    {
        characterX -= 5;
    }
    if(keyIsDown(d))
    {
        characterX += 5;
    }
}

function createBackground()
{
    background(107,169,250);
    fill(0);
}

function makeBorders()
{
    strokeWeight(10);
    //top
    line(0,0,600,0);
    //bottom
    line(0,600,600,600);
    //left
    line(0,0,0,600);
    //right
    line(600,0,600,600);
}

function createBall(x,y)
{
    shapespeedX = x;
    shapespeedY = y;
}

function moveBall()
{
    //draw
    strokeWeight(1);
    fill(255,255,255);
    circle(shapeX,shapeY,diameter);

    //move
    shapeX += shapespeedX;
    shapeY += shapespeedY;

    //bouncing
    if(shapeX > width-10 || shapeX < 0+10)
    {
        shapespeedX *= -1;
    }
    if(shapeY > height-10 || shapeY < 0+10)
    {
        shapespeedY *= -1;
    }

    if(shapeY > characterY-10 && shapeX >= characterX && shapeX <= characterX+120)
    {
        shapespeedY *= -1;
    }
    
}

function gameOver()
{
    if(shapeY > 520)
    {
        textSize(20);
        fill(255,255,255);
        text('GAME OVER',230,350);
        textSize(10);
        text('reload to try again',250,370);

        shapespeedX = 0;
        shapespeedY = 0;
    }
}

function createBricks()
{
    for (var i = 0; i < 10; i++)
        {
            bricks[i] = [];
            for (var j = 0; j < 7; j++)
            {
                bricks[i][j] = {x: brickX, y: brickY, status: 1 };
            }
        }
}

function drawBricks()
{
    for (var i = 0; i < 10; i++)
        {
            for (var j = 0; j < 7; j++)
            {
               if(bricks[i][j].status === 1)
               {
                brickX = i * 100 + 10;
                brickY = j * 40 + 10;
               
                bricks[i][j].x = brickX;
                bricks[i][j].y = brickY;

                fill(255,255,255);
                rect(brickX,brickY,80,30);
               }

            }
        }
}

function destroyBricks()
{
    for (var i = 0; i < 10; i++)
        {
            for (var j = 0; j < 7; j++)
            {
                var disappear = bricks[i][j];
                if(disappear.status === 1)
                {
                    if(shapeX > disappear.x-10 && shapeX < disappear.x + 90 && shapeY > disappear.y-10 && shapeY < disappear.y + 40)
                    {
                        if(score < 41)
                        {
                            shapespeedY *= -1;
                            disappear.status = 0;
                            score += 1;  
                        }
                        
                        //player wins
                        else if(score == 41)
                        {
                            disappear.status = 1;
                            textSize(20);
                            text(win,245,350);
                            shapespeedX = 0;
                            shapespeedY = 0; 
                                
                        }
                        
                        
                    
                    }
                    
               }
            }      
        }
}

function keyPressed()
{
    if(key =='e')
    {
        start = "";
        controls = "";
        shapespeedX = 4;
        shapespeedY = 3;
    }
}

