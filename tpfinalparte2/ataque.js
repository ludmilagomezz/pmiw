class Ataque {

  constructor(X, Y) {
    this.X = X;
    this.Y = Y;
    this.ancho = 30;
    this.alto = 50;
    this.escupido = false;
  }
  dibujar() {
    if (this.escupido) {
      image(ataque, this.X, this.Y, this.ancho, this.alto);
      this.mover();
    }
  }
  mover() {
    this.Y-=5;
  }
  escupir() {         
    this.escupido=true; //cambia el estado de la propiedad escupido para lograr que el dragón escupa.
  }
}
