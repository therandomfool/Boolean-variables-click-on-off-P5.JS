let on = false;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  if(on){
    background(0,0,255);
  } else {
    background(0);
  }
  

  stroke(255);
  strokeWeight(4);
  noFill();
  rectMode(CENTER);
  rect(300,200,100,100);
  
}


function mousePressed(){
  if(mouseX > 250 && mouseX < 350 && mouseY > 150 && mouseY < 250){
    if(on){
      on = false;
    } else {
      on = true;
    }
  }
}