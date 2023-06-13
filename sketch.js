//Maylen Santoro-Trabajo Práctico Nro 1-A.M.-

//variables
var angulo = 0.0;
var desplazamiento = 20;
var escalar = 5;
var velocidad = 2;



function setup() {
  createCanvas(512, 512);
  background(128);
  frameRate(30);
  
  
  //lineas left
  line(15, 100, 200, 500);
  line(25, 100, 200, 500);
  line(35, 100, 200, 500);
  line(45, 100, 200, 500);
  line(55, 100, 200, 500);
  line(65, 100, 200, 500);
  line(75, 100, 200, 500);
  line(85, 100, 200, 500);
  line(95, 100, 200, 500)
  line(105, 100, 200, 500);
  line(115, 100, 200, 500);
  line(125, 100, 200, 500);
  line(135, 100, 200, 500);
  
  //lineas right
  line(305, 400, 500, 112);
  line(315, 400, 500, 112);
  line(325, 400, 500, 112);
  line(335, 400, 500, 112);
  line(345, 400, 500, 112);
  line(355, 400, 500, 112);
  line(365, 400, 500, 112);
  line(375, 400, 500, 112);
  line(385, 400, 500, 112);
  line(395, 400, 500, 112);
  line(405, 400, 500, 112);
  line(415, 400, 500, 112);
  line(425, 400, 500, 112);
  
  //lineas middle
  line(295, 47, 205, 311);
  line(295, 47, 215, 311);
  line(295, 47, 225, 311);
  line(295, 47, 235, 311);
  line(295, 47, 245, 311);
  line(295, 47, 255, 311);
  line(295, 47, 265, 311);
  line(295, 47, 275, 311);
  line(295, 47, 285, 311);
  line(295, 47, 295, 311);
  line(295, 47, 305, 311);
  line(295, 47, 315, 311);
  line(295, 47, 325, 311);
  line(295, 47, 335, 311);
  line(295, 47, 345, 311);
  
 
 
}
function draw() {
  
  console.log("X: " + mouseX + " Y:" + mouseY);
  console.log (frameCount);



  
  
  
  
 var x = desplazamiento + cos(angulo) * escalar;
  var y = desplazamiento + sin(angulo) * escalar;
  line(x, y, 295, 46);
  angulo += velocidad;
  escalar += velocidad;

  var x = desplazamiento + cos(angulo) * escalar;
  var y = desplazamiento + sin(angulo) * escalar;
  line(x, y, 198, 498);
  angulo += velocidad;
  escalar += velocidad;
  
  var x = desplazamiento + cos(angulo) * escalar;
  var y = desplazamiento + sin(angulo) * escalar;
  line(x, y, 499, 110);
  angulo += velocidad;
  escalar += velocidad;
  
  
}

 
  

  
