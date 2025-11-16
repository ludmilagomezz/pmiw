//Ludmila Gomez y Melani Bello
//tpfinalparte2
//link: https://youtu.be/ZfkPLehQQiI

let fondo, ataque, dragon, caballero, inicio, tutorial, ganaste, perdiste, creditos;
let fuego, musica;
let principal; 

function preload() {
  inicio = loadImage('data/inicio.jpg');
  fondo = loadImage('data/fondo.png');
  ataque = loadImage('data/fuego.png');
  dragon = loadImage('data/dragon.png');
  caballero = loadImage('data/caballero.png');    //cargamos todos los recursos necesarios.
  tutorial = loadImage('data/tutorial.jpg');
  ganaste = loadImage('data/ganaste.png');
  perdiste = loadImage('data/perdiste.png');
  creditos = loadImage('data/creditos.png');
  
  fuego = loadSound('data/fuego.mp3');
  musica = loadSound ('data/musica.mp3');
}

function setup() {
  createCanvas (640, 480);
  principal = new Estados();       //le indicamos a la variable principal, cual es la clase que debe llamar.
}

function draw() {
  background(200);
  principal.dibujar();            //llamamos al metodo que dibuja nuestra clase principal, la cual contiene el juego completo.
}

function keyPressed() {
  principal.teclaPresionada(keyCode);//funciona para mover al dragon
}

function mousePressed() {
  principal.estadosPantallas();   //interacción entre pantallas mediante los botones.
}
