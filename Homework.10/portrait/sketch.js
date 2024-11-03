var size = 20;
var count = 0;
var sizeDirection = 1;

var eyesXa = 200;
var eyesXb = 300;
var eyesY = 275;
var eyesDirection = Math.floor(Math.random() * 10) + 1;
var eyesDirectionb = Math.floor(Math.random() * 10) + 1;

var headY = 250;
var headDirection = Math.floor(Math.random() * 10) + 1;

var hatY = 150;
var hatDirection = Math.floor(Math.random() * 10) + 1;

var shirtX = 220;
var shirtY = 270;
var shirtDirectionX = Math.floor(Math.random() * 10) + 1;
var shirtDirectionY = Math.floor(Math.random() * 10) + 1;

function setup()
{
    createCanvas(500, 500);
}

function draw()
{
    background(184,201,230);
    strokeWeight(10);

    //Title
    fill('white');
    textSize(size);
    size += sizeDirection;
    count++;
    if(count>5)
    {
        sizeDirection *= -1;
        count=0;
    }
    text('"What I Wore Today"',30,40);

    //back hat
    fill(176,176,176);
    ellipse(250,150,180,200);

    //jacket
    fill(194,220,240);
    triangle(100,490,250,250,400,490);
    triangle(150,390,220,270,220,390);
    triangle(350,390,280,270,280,390);
    fill(176,105,51);
    rect(shirtX,shirtY,60,220);
    shirtX+=shirtDirectionX;
    if(shirtX >= 400 || shirtX <= 100)
        {
            shirtDirectionX *= -1;
        }
    shirtY+=shirtDirectionY;
    if(shirtY >= 400 || shirtY <= 100)
        {
            shirtDirectionY *= -1;
        }


    //head 
    fill(235,208,183);
    circle(250,headY,200);
    headY+=headDirection;
    if(headY >= 300 || headY <= 200)
    {
        headDirection *= -1;
    }
    
    //hair
    fill(150,112,77);
    ellipse(150,250,30,70);
    ellipse(150,320,30,70);
    ellipse(350,250,30,70);
    ellipse(350,320,30,70);
    triangle(140,400,150,370,160,400);
    triangle(340,400,350,370,360,400);
    
    //hat brim
    fill(176,176,176);
    rect(150,hatY,200,70);
    hatY+=hatDirection;
    if(hatY >= 460 || hatY <= 10)
    {
        hatDirection *= -1;
    }
    

    //eyes
    strokeWeight(10);
    point(eyesXa,eyesY);
    eyesXa+=eyesDirection;
    if(eyesXa >= 300 || eyesXa <= 50)
    {
        eyesDirection *= -1;
    }
    point(eyesXb,eyesY);
    eyesXb+=eyesDirectionb;
    if(eyesXb >= 500 || eyesXb <= 100)
    {
        eyesDirectionb *= -1;
    }

    //smile
    line(220,310,250,320);
    line(250,320,280,310);

    //glasses
    strokeWeight(2);
    fill(0,0,0,0);
    circle(200,265,75);
    circle(300,265,75);
    line(235,270,265,270);

    //Signature
    fill('white');
    textSize(15);
    text("Keana Patman",395,450)

}