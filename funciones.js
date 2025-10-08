function Pantallas(fondos, X, Y, ancho, alto) {
  image(fondos, X, Y, ancho, alto);
}

function DetectarBotones(X, Y, tamX, tamY) {
  return mouseX > X - tamX / 2 &&  mouseX < X + tamX / 2 &&  mouseY > Y - tamY / 2 && mouseY < Y + tamY / 2;
}

function Boton(X, Y, tamX, tamY, curva, texto) {
  
    if (DetectarBotones(X, Y, tamX, tamY)) {
    fill(255, 228,178);
  } else {
    fill(206, 79, 79);
  }
  
  rectMode(CENTER);
  rect(X, Y, tamX, tamY, curva);
  
  textAlign(CENTER, CENTER);
  textSize(25);
  fill(0);
  text(texto, X, Y);
}
