class Estados {

  constructor() {
    this.X = 0;
    this.Y = 0;
    this.ancho = 640;
    this.alto  =480;

    this.XBoton = 480;
    this.YBoton = 420;
    this.tamBoton = 50;
    this.juego = new Juego(6);

    this.pantallaActual = 1;

    this.musica = false;
  }

  dibujar() {

    if (this.pantallaActual === 1) {
      this.pantalla1();
    }
    if (this.pantallaActual === 2) {
      this.pantalla2();
    }
    if (this.pantallaActual === 3) {
      this.pantalla3();
    }
    if (this.pantallaActual === 4) {
      this.pantalla4();
    }
    if (this.pantallaActual === 5) {
      this.pantalla5();
    }
    if (this.pantallaActual === 6) {
      this.pantalla6();
    }
  }

  boton(XBoton, YBoton) {
    fill(93, 93, 126);
    rect(XBoton, YBoton, this.tamBoton*3, this.tamBoton, this.tamBoton/4);
  }

  detectarBotones(XBoton, YBoton, ancho, alto) {
    return mouseX > XBoton && mouseX < XBoton + ancho && mouseY > YBoton && mouseY < YBoton + alto;
  }

  estadosPantallas() {

    // pantalla 1 > pantalla 2

    if (this.pantallaActual === 1) {
      if (this.detectarBotones(this.XBoton, this.YBoton, this.tamBoton*3, this.tamBoton)) {
        this.pantallaActual = 2;
      }
    }

    //pantalla 2 > pantalla 3

    else if (this.pantallaActual === 2) { //musica 
      if (this.detectarBotones(this.XBoton, this.YBoton, this.tamBoton*3, this.tamBoton)) {
        this.pantallaActual = 3;

        //comienza musica
        if (!this.musica) {
          musica.play();
          this.musica = true;
        }
      }
       
       //pantalla 3 > pantalla 4
       
    } else if (this.pantallaActual === 4) {

      //para musica
      if (this.musica) {
        musica.stop();
        this.musica = false;
      }

      if (this.detectarBotones(this.XBoton, this.YBoton, this.tamBoton*3, this.tamBoton)) { //boton reiniciar juego
        this.juego = new Juego(6);
        this.pantallaActual = 2;
      }
      if (this.detectarBotones(this.XBoton-235, this.YBoton, this.tamBoton*3, this.tamBoton)) { //boton para creditos
        this.pantallaActual = 6;
      }
      if (this.detectarBotones(this.XBoton-470, this.YBoton, this.tamBoton*3, this.tamBoton)) {//boton para inicio
        this.juego = new Juego(6);
        this.pantallaActual = 1;
      }
      
      //pantalla 3 > pantalla 5
      
    } else if (this.pantallaActual === 5) {

      //para musica
      if (this.musica) {
        musica.stop();
        this.musica = false;
      }

      if (this.detectarBotones(this.XBoton, this.YBoton, this.tamBoton*3, this.tamBoton)) { //boton reiniciar juego
        this.juego = new Juego(6);
        this.pantallaActual = 2;
      }
      if (this.detectarBotones(this.XBoton-235, this.YBoton, this.tamBoton*3, this.tamBoton)) { //boton para creditos
        this.pantallaActual = 6;
      }
      if (this.detectarBotones(this.XBoton-470, this.YBoton, this.tamBoton*3, this.tamBoton)) {//boton para inicio
        this.juego = new Juego(6);
        this.pantallaActual = 1;
      }
      
      //pantalla 5/4 > pantalla 6
      
    } else if (this.pantallaActual === 6) {
      if (this.detectarBotones(this.XBoton-235, this.YBoton, this.tamBoton*3, this.tamBoton)) {
        this.juego = new Juego(6);
        this.pantallaActual = 1;
      }
    }
  }

  pantalla1() { //inicio
    image(inicio, this.X, this.Y, this.ancho, this.alto);
    fill(255);
    textSize(20);
    text('Los caballeros ya están marchando ¿Podrás detenerlos?', this.X+60, this.Y+220);
    textSize(16);
    text('Poné a prueba tu velocidad, tu puntería y tu coraje.', this.X+135, this.Y+250);
    text('¡Hacé clic y empezá la aventura!', this.X+190, this.Y+280);

    this.boton(this.XBoton, this.YBoton);
    textSize(30);
    fill(255);
    text('Siguiente', this.XBoton+10, this.YBoton+35);
  }

  pantalla2() { //tutorial
    image(tutorial, this.X, this.Y, this.ancho, this.alto);
    fill(255);
    textSize(50);
    text('Tutorial', this.X+230, this.Y+110);

    textSize(16);
    fill(255);
    text('Atacar', this.X+150, this.Y+380);
    text('Deslizar a\nla derecha', this.X+520, this.Y+335);
    text('Deslizar a\nla izquierda', this.X+520, this.Y+380);

    this.boton(this.XBoton, this.YBoton);
    textSize(30);
    fill(255);
    text('Comenzar', this.XBoton+5, this.YBoton+35);
  }

  pantalla3() { //juego
    this.juego.dibujar();
  }

  pantalla4() { //perdiste
    image(perdiste, this.X, this.Y, this.ancho, this.alto);

    fill(255);
    textSize(50);
    text('¡Perdiste!', this.X+200, this.Y+120);

    this.boton(this.XBoton-470, this.YBoton);
    textSize(30);
    fill(255);
    text('Inicio', this.XBoton-430, this.YBoton+35);

    this.boton(this.XBoton-235, this.YBoton);
    textSize(30);
    fill(255);
    text('Creditos', this.XBoton-215, this.YBoton+35);

    this.boton(this.XBoton, this.YBoton);
    textSize(30);
    fill(255);
    text('Reiniciar', this.XBoton+15, this.YBoton+35);
  }

  pantalla5() { //ganaste
    image(ganaste, this.X, this.Y, this.ancho, this.alto);
    fill(255);
    textSize(50);
    text('¡Ganaste!', this.X+200, this.Y+160);

    this.boton(this.XBoton-470, this.YBoton);
    textSize(30);
    fill(255);
    text('Inicio', this.XBoton-430, this.YBoton+35);

    this.boton(this.XBoton-235, this.YBoton);
    textSize(30);
    fill(255);
    text('Creditos', this.XBoton-215, this.YBoton+35);

    this.boton(this.XBoton, this.YBoton);
    textSize(30);
    fill(255);
    text('Reiniciar', this.XBoton+15, this.YBoton+35);
  }

  pantalla6() { //creditos
    image(creditos, this.X, this.Y, this.ancho, this.alto);

    fill(255);
    textSize(50);
    text('Creditos', this.X+230, this.Y+160);

    fill(255);
    textSize(35);
    text('El Dragon', this.X+250, this.Y+230);
    textSize(20);
    text('Ray Bradbury', this.X+270, this.Y+260);

    fill(255);
    textSize(30);
    text('Ludmila Gomez y Melani Bello', this.X+110, this.Y+350);

    this.boton(this.XBoton-235, this.YBoton);
    textSize(30);
    fill(255);
    text('Inicio', this.XBoton-195, this.YBoton+35);
  }

  teclaPresionada(keyCode) {
    this.juego.teclaPresionada(keyCode);
  }
}
