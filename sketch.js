var rotAngle=1;

var mirror=4;
var simplicity = 7;
var dotNum = 12;
var dotSpeed = [];

var dotx = [];
var doty = [];
var dotDist = [];
var dotSize = [];
var dotAngle = [];

var dotx2 = [];
var doty2 = [];
var dotAngle2 = [];


function setup() { 
  createCanvas(windowWidth,windowHeight);
  noStroke();
  frameRate(15);
  
  for (var i = 0; i < dotNum; i++){
  	dotDist[i] = random(0,width/2);
    dotAngle[i] = 0;
    dotAngle2[i] = 0;
    dotSize[i] = random (2,5);
    dotSpeed[i] = random (1,10);
  }
} 

function draw() { 
  background(209,112,130);
  translate(width/2, height/2);
  
  for (var i = 0; i<mirror; i++){
    rotate(radians(rotAngle));
    fill(random(237), 200, 237, random(200));
    
  for (var j = 0; j<dotNum; j++){
    	

      dotx[j] = dotDist[j] * cos(radians(dotAngle[j]));
      doty[j] = dotDist[j] * sin(radians(dotAngle[j]));
      ellipse(dotx[j], doty[j], dotSize[j]*12, dotSize[j]*12);
      

      dotx2[j] = dotDist[j] * cos(radians(dotAngle2[j]));
      doty2[j] = dotDist[j] * sin(radians(dotAngle2[j]));
      ellipse(dotx2[j], doty2[j], dotSize[j], dotSize[j]);
      

      if (j>2 && j%simplicity==0){
        push();
        strokeWeight(3);
        stroke(random(242),252,95, 50);
        
        line(dotx[j], doty[j], dotx[j-1], doty[j-1]);
        line(dotx[j], doty[j], dotx[j-2], doty[j-2]);
        line(dotx[j], doty[j], dotx[j-3], doty[j-3]);
        line(dotx[j-1], doty[j-1], dotx[j-2], doty[j-2]);
        line(dotx[j-1], doty[j-1], dotx[j-3], doty[j-3]);
        line(dotx[j-2], doty[j-2], dotx[j-3], doty[j-3]);
        
        line(dotx2[j], doty2[j], dotx2[j-1], doty2[j-1]);
        line(dotx2[j], doty2[j], dotx2[j-2], doty2[j-2]);
        line(dotx2[j], doty2[j], dotx2[j-3], doty2[j-3]);
        line(dotx2[j-1], doty2[j-1], dotx2[j-2], doty2[j-2]);
        line(dotx2[j-1], doty2[j-1], dotx2[j-3], doty2[j-3]);
        line(dotx2[j-2], doty2[j-2], dotx2[j-3], doty2[j-3]);
        
        pop();
      }
    	
      dotAngle[j]+=(dotSpeed[j]*0.05);
      dotAngle2[j]-=(dotSpeed[j]*0.05); 
    }
    rotAngle+=(360/mirror); 
 		 
  }
}