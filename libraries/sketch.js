//build in variable: mouse X, mouse Y


function setup() {
  //createCanvas(400, 400);
  createCanvas(windowWidth, windowHeight);
  background(50);
}

function draw() {
  //background(220);
  noStroke();
  //fill(mouseX, mouseY, random(200));
  fill(mouseX, mouseY, random(200), random(200));
  ellipse(mouseX, mouseY, 25, 25);
  //ellipse(random(300), mouseY, 10, 10);
  //ellipse(random(200), random(200), 25, 25)
  
function mousePressed () {
  background(220);
  
  print("pressed");
}
  
  
  
}