var mySketch, mic, volume;

function preload() {
  mySketch = loadImage('file/SDT.png');
  myBack= loadImage('file/backgroundSDT.png')
  mySound = loadSound('file/Lou Reed - Walk On The Wild Side.mp3');
  }

function setup() {
  createCanvas(windowWidth,windowHeight);
  mic = new p5.AudioIn();
  mic.start();
  mySound.setVolume(1);
  mySound.play();
}

function draw() {
  backgroundImage(mySketch);
  backgroundImage(myBack);
  fill(250);
  noStroke();
  var newMax = 5
  volume = mic.getLevel();
  var X = map(volume,0,1,0,newMax);
  push();

  push();
  translate(width/2,height/2-100);
  imageMode(CENTER)
  image(mySketch, 0, 0,280,280);

  //black
  fill(0);
  strokeWeight(1);
  stroke(1);
  var blackX = 34.5;
  var blackY = -89.5;
  var blackSize = map(volume, 0, 1, 15, 40);
  ellipse(blackX, blackY, blackSize, blackSize);

  //red
  fill(250,0,0);
  strokeWeight(1);
  stroke(1);
  var redX = 79.5;
  var redY = 15.5;
  var redSize = map(volume, 0, 1, 15, 40);
  ellipse(redX, redY, redSize, redSize);
  
  //yellow
  fill('#FFED00');
  strokeWeight(1);
  stroke(1);
  var yellowX = -39;
  var yellowY = 69;
  var yellowSize = map(volume, 0, 1, 15, 40);
  ellipse(yellowX, yellowY, yellowSize, yellowSize);
  
  //white
  stroke(255);
  noFill();
  strokeWeight(3);
  var whiteX = 0;
  var whiteY = 0;
  var whiteSize = map(volume, 0, 1, 300, 200);
  ellipse(whiteX, whiteY, whiteSize, whiteSize);
  pop();

  var textY= map(volume,0,1,160,10);
  noFill();
  stroke(255);
  strokeWeight(3);
  textAlign(CENTER);
  textSize(150);
  textFont('futura')
  text("BERLIN",width/2,textY+height/1.3);
  }

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function backgroundImage(img) {
  var x=0;
  var y=0;
  var w=width;
  var h=height;
  var offsetX=0.5;
  var offsetY=0.5;

  var iw = img.width,
  ih = img.height,
  r = Math.min(w/iw,h/ih),
  nw = iw*r,
  nh = ih*r,  
  cx,cy,cw,ch,ar=1;

  if (nw<w)ar=w/nw;                             
  if (Math.abs(ar-1)<1e-14 && nh<h)ar=h/nh;  
  nw *= ar;
  nh *= ar;
  cw = iw/(nw/w);
  ch = ih/(nh/h);
  cx = (iw-cw)*offsetX;
  cy = (ih-ch)*offsetY;

  if (cx<0)cx=0;
  if (cy<0)cy=0;
  if (cw>iw)cw=iw;
  if (ch>ih)ch=ih;
  
  image(img,cx,cy,cw,ch,x,y,w,h);
}