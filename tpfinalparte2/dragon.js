class Dragon {

  constructor() {
    this.X = width/2;
    this.Y = 340;
    this.ancho = 140;
    this.alto = 140;
    this.ataque = new Ataque();
    this.fuego = fuego;
  }
  dibujar() {
    this.ataque.dibujar();
    image(dragon, this.X, this.Y, this.ancho, this.alto);
  }
  accionTeclado() {
    if (keyIsDown (LEFT_ARROW)) {
      this.moverIzquierda();
    } else if (keyIsDown (RIGHT_ARROW)) {
      this.moverDerecha();
    }
  }
  moverDerecha() {
    this.X += 6;
    if (this.X + this.ancho > width) { //tope del borde derecho
      this.X = width - this.ancho;
    }
  }
  moverIzquierda() {
    this.X -= 6;
    if (this.X < 0) { //tope del borde izquierdo
      this.X = 0;
    }
  }
  escupir() {
    this.ataque= new Ataque(this.X+40, this.Y);
    this.ataque.escupir(); //llamamos a escupir de ataque, el cual cambia el estado de la propiedad escupido
  }                         //para lograr que el dragón escupa.
  escupio() {
    return this.ataque.escupido;  //revisa si hay bolas de fuego en la pantalla y devuelve true o false segun corresponda
  }
  sonidoEscupir() {
    this.fuego.play();
  }
  teclaPresionada(keyCode) {
    if (keyCode == 32) {            //lo llamamos en la function keypressed, cada vez que presionamos el espacio,
      this.sonidoEscupir();         //escupe una bola de fuego, llamando al metodo escupir.
      this.escupir();
    }
  }
}
