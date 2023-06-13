//Maylen Santoro-ACTIVIDAD 2-A.M.-
//Para interactuar mové el mouse

function setup() {
  createCanvas(600, 600);
  background(210, 200, 100);
  frameRate(30);
  
  line(5, 100, 200, 500);
  line(10, 200, 400, 500);
  line(30, 300, 500, 550);

  ///
  fill(0, 0, 10, 60);
  noStroke();
  triangle(98, 125, 130, 105, 630, 850);
  triangle(291, 191, 320, 180, 450, 695);
  ///
  fill(0, 0, 10, 60);
  noStroke();
  triangle(98, 125, 130, 105, 630, 950);
  ///
  fill(200, 100, 30);
  noStroke();
  rect(500, 400, 10, 40);
  rect(200, 200, 50, 50);
  rect(300, 100, 30, 10);
  ///
  fill(20, 50, 30);
  noStroke();
  quad(80, 500, 140, 300, 10, 500, 60, 500);

  ///
  fill(20, 50, 30);
  noStroke();
  quad(200, 500, 200, 150, 500, 200, 100, 300);
  ///
  fill(200, 100, 30);
  noStroke();
  rect(800, 400, 10, 40);
  rect(500, 200, 50, 50);
  rect(200, 100, 30, 10);
  ///
  noStroke();
  fill(300, 100, 50);
  triangle(460, 120, 480, 140, 430, 180);
}

function draw() {
  console.log("X: " + mouseX + " Y:" + mouseY);
  //background(30, 50, 100);
  //print("hola");
  console.log(frameCount);
  //console.log(frameRate());
  //strokeWeight(frameCount);
  //strokeWeight(frameRate());
 
  //-------PINCEL
  noStroke();
  fill(10, 30, 0, 200);
 circle(mouseX, mouseY, 15, 20);

 stroke(0);
  strokeWeight(1);
  
  //--------PMOUSE
  stroke(15, 20, 0, 100);
  strokeWeight(5);
  line(mouseX, mouseY, pmouseX, pmouseY);


  stroke(0);
  strokeWeight(2);

  
}
