var x;
var y;

function setup() {
  createCanvas (500,500)
  x = 0;
  y = 0;
}

function draw() {
  caterpillar(x,y);
  x++;
  y++;
  
}

function caterpillar (x1, y1) {
 background (0, 0, 0,10);

noStroke()

fill(255,51,153)
ellipse(x1-160, y1-160, 20, 20);
fill(255,0,0)
ellipse(x1-140, y1-140, 40, 40);
fill(255,128,0)
ellipse(x1-110, y1-110, 60, 60);
fill(255,255,0)
ellipse(x1-70, y1-70, 80, 80);
fill(0,204,0)
ellipse(x1-30, y1-30, 100, 100);
fill(51,51,255);
ellipse(x1+20, y1+20, 120, 120);

fill(255, 255, 255)
  	ellipse(x1 + 10, y1 + 10, 23, 23);
  	fill(0,0,0)
  	ellipse(x1 + 11, y1 + 11, 14, 14);
    fill(255, 255, 255)
  	ellipse(x1 + 40, y1 + 10, 23, 23);
  	fill(0,0,0)
  	ellipse(x1 + 41, y1 + 11, 14, 14);
  	fill(0,0,0)
  	ellipse(x1+26,y1+40,45,20)
    

}