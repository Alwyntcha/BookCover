
function setup(){
  createCanvas(500, 500);}

function draw() {
  background(0, 50, 100);
  
  fill(180, 180, 180)
  quad(88, 81, 136, 70, 90, 113, 80, 126);
  
  line(107, 100, 375, 375);
  
  fill(250, 250, 250)
  strokeWeight(0);
  triangle(410, 435, 400, 400, 375, 375);
  triangle(440, 405, 400, 400, 375, 375);  
  
  
  fill(200, 250, 250);
  textStyle(BOLDITALIC);
  textSize(20);
  text('Breathe, Focus, Shoot', 127, 50, 250);
  ellipseMode(CENTER);
  textAlign(CENTER)
  textSize(15);
  fill(255);
  stroke(0);
  strokeWeight(2);
  ellipse(250, 250, 250, 250);
  

  
  fill(0);
  ellipse(250, 250, 200, 200);
  
  
  fill(100, 100, 255);
  ellipse(250, 250, 150, 150);
  
  fill('rgb(100%,0%,10%)');
  ellipse(250, 250, 100, 100);
  
  fill(255, 204, 100);
  ellipse(250, 250, 50, 50);
  
  fill(0, 250, 250);
  text('100', 127, 245, 250);
  
  fill(0, 250, 250);
  text('80', 127, 280, 250);
  
  fill(240, 240, 240);
  text('60', 127, 305, 250);
       
  fill(240, 240, 240);
  text('40', 127, 335, 250);
  
  fill(150, 100, 250);
  text('20', 127, 355, 250);
}