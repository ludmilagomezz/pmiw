class Juego {

  constructor(cantidad) {
    this.X = 0;
    this.Y = 0;
    this.ancho = 640;
    this.alto = 480;

    this.dragon = new Dragon();
    this.cantidad = cantidad;


    this.caballero = [];
    for (let i = 0; i <this.cantidad; i++) {
      this.caballero[i]=new Caballeros(i*110, random(-100, -300));
    }
  }

  dibujar() {

    image(fondo, this.X, this.Y, this.ancho, this.alto);
    this.dragon.dibujar();
    this.dragon.accionTeclado(); //que con accion teclado

    for (let i = 0; i <this.cantidad; i++) {
      this.caballero[i].dibujar();
      this.caballero[i].movimiento();
    }
    this.controlarAtaque();
    this.derrotaDragon();
    this.victoriaDragon();
  }

  controlarAtaque() {
    if (this.dragon.escupio()) {
      for (let i = 0; i < this.caballero.length; i ++) {
        this.caballero[i].choqueAtaque(this.dragon.ataque)
      }
    }
  }

  derrotaDragon() {
    for (let i = 0; i < this.caballero.length; i++) {
      if (this.caballero[i].vidaCaballeros && this.caballero[i].Y + this.caballero[i].alto >= height) {

        principal.pantallaActual = 4;
      }
    }
  }

  victoriaDragon() {
    for (let i = 0; i < this.caballero.length; i++) {
      if (this.caballero[i].vidaCaballeros) {
        return;
      }
    }
    principal.pantallaActual = 5;
  }


  teclaPresionada(keyCode) {
    this.dragon.teclaPresionada(keyCode);
  }
}
