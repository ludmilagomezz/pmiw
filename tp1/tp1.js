//Ludmila Gomez, comision 1, tp1
//video: https://youtu.be/ZRNIB_Qlbb0

let OpArt, negro, cambioColor;

function preload() {
  OpArt = loadImage('data/OpArt.jpg');
}

function setup() {
  createCanvas(800, 400);
  negro=color (0);
  cambioColor = false;
}

function draw() {
  push();
  translate(400, 0);
  patronDiagonales(0, 17, 0, 400);
  rectangulo(130, 55, 135, 265);
  quads(130, 55, 265, 180, 6, 22);
  triangulo1(130, 55, 130);
  triangulo2(130, 185, 135);
  repeticionTriangulo1(6, 130, 55, 187, 135);
  pop();
   image(OpArt, 0, 0,400,400);
}

function mousePressed() {
  if (mouseX>width/2) {
    if (cambioColor) {
      negro=color(0);
    } else {
      negro=color(0, 255, 206);
    }
    cambioColor=!cambioColor;
  }
}
