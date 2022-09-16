//Kiara Iran Castillo Magallanes 
//09/15/2022
//Class 24603 

function setup() {
    createCanvas(800, 600);
  }
  
  function draw() {
    background(0);
    noStroke();
    var x = 10;
  
    car(mouseX,mouseY, 50);
      car(-mouseX + 400,-mouseY + 400, 40);
      car(-mouseX + 300, mouseY, 40);
  }
  
  function car(x, y, r)  {
     fill(9, 235, 69);// draw car body 
    rect(x + 20, 160, 40);
     rect(x + 15, 178, 70, 40);
    
    fill(77, 66, 66);// draw the wheels
    ellipse(x + 25, 221, 24, 24);
    ellipse(x + 75, 221, 24, 24);
    
  }