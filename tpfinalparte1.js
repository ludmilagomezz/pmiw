//Ludmila Gomez y Melanie Bello
//comision 1
//link: https://youtu.be/5zYzB1EWlik

let ambiente, sonando;
let estado=0;
let fondos=[];
let textos=['El Dragón',
  'Ray Bradbury',
  'La noche soplaba sobre el páramo vacío;',
  'dos hombres, junto a una hoguera, esperaban en silencio.',
  'Hablaron sobre el dragón, podía olerlos a kilómetros,',
  'devoraba a los viajeros solitarios y nadie había logrado vencerlo.',
  'Uno dudaba del sentido de la misión; el otro insistía.',
  'El más temeroso relató ojos de fuego, aliento venenoso',
  'y caballeros vencidos.',
  'Se vistieron con sus armaduras,',
  'preparandose para el enfrentamiento.',
  'Un viento extraño sopló polvo, lluvias,',
  'almas perdidas; a lo lejos apareció el dragón.',
  'Un rugido, un ojo amarillo brillante',
  'y un cuerpo enorme que se abalanzaba.',
  'Los hombres montaron sus caballos, bajaron las viseras',
  'y alzaron lanzas, enfrentando al monstruo.',
  'El dragón los aplastó con su fuerza y fuego;',
  'las armaduras brillaron antes de ser destruidas.',
  'Pero no era un dragón: era un tren nocturno que, rugiendo,',
  'atravesó el páramo y siguió su camino, perdiéndose en la distancia.',
  'La bestia nunca existio y los hombres jamas volvieron...',
  'Esperaron ocultos detras de unas rocas cercanas.',
  'Se quedaron paralizados, a la espera de que',
  'la bestia siga su camino, cuando de repente...',
  'Se detuvo, revelando su verdadero tamaño,',
  'era enorme; rugiendo, se acercó a ellos.',
  'La bestia podía olerlos, pero no lograba verlos.',
  'Al cabo de unos segundos, siguió su camino',
  'y los hombres sobrevivieron.',
  'La bestia escuchó sus pasos y comenzó a perseguirlos.',
  'Logró alcanzarlos y nunca se supo más nada de ellos.',
  'Creditos',
  'Ludmila Gómez y Melani Bello',
  'Aventura Gráfica Interactiva Web'];

function preload() {

  ambiente=loadSound('data/suspenso.mp3');

  for (let i=0; i<19; i++) {
    fondos[i]=loadImage('data/fondo' +i+ '.png');
  }
}

function setup() {
  createCanvas(640, 480);
  
  for (let i=0; i<19; i++) {
    fondos[i].resize(640, 480);
  }
  ambiente.loop();
  sonando=false;
}

function draw() {
  if (!sonando) {
    ambiente.play();
    sonando = true;
  }

  if (estado === 0) { //portada

    Pantallas(fondos[0], 0, 0, 640, 480);
    Boton(width/2, 420, 150, 50, 50/4, "Comenzar");
    fill(255);
    textSize(50);
    text(textos[0], width/2, 50);
    textSize(30);
    text(textos[1], width/2, 100);
  }
  if (estado === 1) { //pantalla 1

    Pantallas(fondos[1], 0, 0, 640, 480);
    Boton(550, 420, 150, 50, 50/4, "Siguiente");
    fill(255);
    textSize(20);
    text(textos[2], width/2, 50);
    textSize(20);
    text(textos[3], width/2, 70);
  }
  if (estado === 2) {  //pantalla 2

    Pantallas(fondos[2], 0, 0, 640, 480);
    Boton(550, 420, 150, 50, 50/4, "Siguiente");
    fill(255);
    textSize(20);
    text(textos[4], width/2, 50);
    textSize(20);
    text(textos[5], width/2, 70);
  }
  if (estado === 3) { //pantalla 3 (bifurcacion 1)

    Pantallas(fondos[3], 0, 0, 640, 480);
    Boton(550, 430, 150, 50, 50/4, "Dejar mision");
    Boton(100, 430, 150, 50, 50/4, "Seguir mision");
    fill(255);
    textSize(20);
    text(textos[6], width/2, 50);
    textSize(20);
    text(textos[7], width/2, 70);
    textSize(20);
    text(textos[8], width/2, 90);
  }
  if (estado === 4) { //pantalla 4 (seguir mision)

    Pantallas(fondos[4], 0, 0, 640, 480);
    Boton(550, 420, 150, 50, 50/4, "Siguiente");
    fill(255);
    textSize(20);
    text(textos[9], 440, 40);
    textSize(20);
    text(textos[10], 440, 60);
  }
  if (estado === 5) { //pantalla 5 (seguir mision)

    Pantallas(fondos[5], 0, 0, 640, 480);
    Boton(550, 420, 150, 50, 50/4, "Siguiente");
    fill(255);
    textSize(20);
    text(textos[11], 440, 40);
    textSize(20);
    text(textos[12], 440, 60);
  }
  if (estado === 6) { //pantalla 6(bifurcacion 2)

    Pantallas(fondos[6], 0, 0, 640, 480);
    Boton(550, 430, 150, 50, 50/4, "Atacar");
    Boton(100, 430, 150, 50, 50/4, "Esconderse");
    fill(255);
    textSize(20);
    text(textos[13], width/2, 50);
    textSize(20);
    text(textos[14], width/2, 70);
  }
  if (estado === 7) { //pantalla 7 (atacar)

    Pantallas(fondos[7], 0, 0, 640, 480);
    Boton(550, 430, 150, 50, 50/4, "Siguiente");
    fill(255);
    textSize(20);
    text(textos[15], width/2, 50);
    textSize(20);
    text(textos[16], width/2, 70);
  }
  if (estado === 8) { //pantalla 8 (atacar)

    Pantallas(fondos[8], 0, 0, 640, 480);
    Boton(550, 430, 150, 50, 50/4, "Siguiente");
    fill(255);
    textSize(20);
    text(textos[17], width/2, 50);
    textSize(20);
    text(textos[18], width/2, 70);
  }
  if (estado === 9) { //pantalla 9 (atacar)

    Pantallas(fondos[9], 0, 0, 640, 480);
    Boton(550, 430, 150, 50, 50/4, "Siguiente");
    fill(255);
    textSize(20);
    text(textos[19], width/2, 50);
    textSize(20);
    text(textos[20], width/2, 70);
  }
  if (estado === 10) { //pantalla 10 (fin 1)

    Pantallas(fondos[10], 0, 0, 640, 480);
    Boton(width/2, 420, 150, 50, 50/4, "Creditos");
    fill(255);
    textSize(20);
    text(textos[21], width/2, 50);
  }
  if (estado === 11) { //pantalla 11 (esconderse)

    Pantallas(fondos[11], 0, 0, 640, 480);
    Boton(550, 430, 150, 50, 50/4, "Siguiente");
    fill(255);
    textSize(20);
    text(textos[22], width/2, 50);
  }
  if (estado === 12) { //pantalla 12 (esconderse)

    Pantallas(fondos[12], 0, 0, 640, 480);
    Boton(550, 430, 150, 50, 50/4, "Siguiente");
    fill(255);
    textSize(20);
    text(textos[23], width/2, 50);
    textSize(20);
    text(textos[24], width/2, 70);
  }
  if (estado === 13) { //pantalla 13 (bifurcacion)

    Pantallas(fondos[13], 0, 0, 640, 480);
    Boton(550, 430, 150, 50, 50/4, "Contenerse");
    Boton(100, 430, 150, 50, 50/4, "Correr");
    fill(255);
    textSize(20);
    text(textos[25], width/2, 50);
    textSize(20);
    text(textos[26], width/2, 70);
  }
  if (estado === 14) { //pantalla 14 (contenerse)

    Pantallas(fondos[14], 0, 0, 640, 480);
    Boton(550, 430, 150, 50, 50/4, "Siguiente");
    fill(255);
    textSize(20);
    text(textos[27], width/2, 50);
  }
  if (estado === 15) { //pantalla 15 (fin 2)

    Pantallas(fondos[15], 0, 0, 640, 480);
    Boton(width/2, 420, 150, 50, 50/4, "Creditos");
    fill(255);
    textSize(20);
    text(textos[28], width/2, 50);
    text(textos[29], width/2, 70);
  }
  if (estado === 16) { //pantalla 16 (correr)

    Pantallas(fondos[16], 0, 0, 640, 480);
    Boton(550, 430, 150, 50, 50/4, "Siguiente");
    fill(255);
    textSize(20);
    text(textos[30], width/2, 50);
  }
  if (estado === 17) { //pantalla 17 (fin 3)

    Pantallas(fondos[17], 0, 0, 640, 480);
    Boton(width/2, 420, 150, 50, 50/4, "Creditos");
    fill(255);
    textSize(20);
    text(textos[31], width/2, 50);
  }
  if (estado === 18) { //Creditos

    Pantallas(fondos[18], 0, 0, 640, 480);
    Boton(width/2, 420, 150, 50, 50/4, "Reiniciar");
    fill(255);
    textSize(30);
    text(textos[32], width/2, 50);
    textSize(20);
    text(textos[33], width/2, 75);
    textSize(20);
    text(textos[34], width/2, 100);
  }
}

function mousePressed() {
  if (estado===0) {
    if (DetectarBotones(width/2, 420, 150, 50)) {
      estado=1;
      ambiente.play();
    }
  } else if (estado===1) {
    if (DetectarBotones(550, 420, 150, 50)) {
      estado=2;
    }
  } else if (estado===2) {
    if (DetectarBotones(550, 420, 150, 50)) {
      estado=3;
    }
  } else if (estado===3) {
    if (DetectarBotones(550, 420, 150, 50)) {
      estado=0;
    }
    if (DetectarBotones(100, 430, 150, 50)) {
      estado=4;
    }
  } else if (estado===4) {
    if (DetectarBotones(550, 420, 150, 50)) {
      estado=5;
    }
  } else if (estado===5) {
    if (DetectarBotones(550, 420, 150, 50)) {
      estado=6;
    }
  } else if (estado===6) {
    if (DetectarBotones(550, 420, 150, 50)) {
      estado=7;
    }
    if (DetectarBotones(100, 430, 150, 50)) {
      estado=11;
    }
  } else if (estado===7) {
    if (DetectarBotones(550, 420, 150, 50)) {
      estado=8;
    }
  } else if (estado===8) {
    if (DetectarBotones(550, 420, 150, 50)) {
      estado=9;
    }
  } else if (estado===9) {
    if (DetectarBotones(550, 420, 150, 50)) {
      estado=10;
    }
  } else if (estado===11) {
    if (DetectarBotones(550, 420, 150, 50)) {
      estado=12;
    }
  } else if (estado===12) {
    if (DetectarBotones(550, 420, 150, 50)) {
      estado=13;
    }
  } else if (estado===13) {
    if (DetectarBotones(550, 420, 150, 50)) {
      estado=14;
    }
    if (DetectarBotones(100, 430, 150, 50)) {
      estado=16;
    }
  } else if (estado===14) {
    if (DetectarBotones(550, 420, 150, 50)) {
      estado=15;
    }
  } else if (estado===16) {
    if (DetectarBotones(550, 420, 150, 50)) {
      estado=17;
    }
  } else if (estado===10) {
    if (DetectarBotones(width/2, 420, 150, 50)) {
      estado=18;
    }
  } else if (estado===15) {
    if (DetectarBotones(width/2, 420, 150, 50)) {
      estado=18;
    }
  } else if (estado===17) {
    if (DetectarBotones(width/2, 420, 150, 50)) {
      estado=18;
    }
  } else if (estado===18) {
    if (DetectarBotones(width/2, 420, 150, 50)) {
      estado=0;
    }
  }
}
