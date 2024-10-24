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
    textSize(20);
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
    rect(220,270,60,220);

    //head 
    fill(235,208,183);
    circle(250,250,200);
    
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
    rect(150,150,200,70);

    //eyes
    strokeWeight(10);
    point(200,275);
    point(300,275);

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