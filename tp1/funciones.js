function patronDiagonales(x1, x2, y1, y2) {
  for (let i = x1; i< width; i=i+44) {
    for (let i2 = x2; i2< width; i2=i2+44) {
      line(i, y1, i-400, y2);
      strokeWeight(17);
      stroke(negro);
      strokeCap(PROJECT);
      line(i2, y1, i2-400, y2);
      strokeWeight(17);
      stroke(255);
      strokeCap(PROJECT);
    }
  }
}


function rectangulo( X, Y, ancho, alto) {
  noStroke();
  fill(255);
  rect(X, Y, ancho, alto);
}


function quads(x1, y1, x2, y2, cant, alto) {
  for (let i=0; i<cant; i++) {
    if (i%2==0) {
      fill(negro);
    } else {
      fill(255);
    }
    noStroke();
    quad(x1, y1 + i * alto, x1, y1 + (i + 1) * alto, x2, y2 + (i + 1) * alto, x2, y2 + i * alto);
  }
}


function triangulo1( x, y, lado) {
  triangle(x, y, x+lado, y, x+lado, y+lado);
}


function triangulo2( x, y, lado) {
  triangle(x, y, x, y+lado, x+lado, y+lado);
}


function repeticionTriangulo1( cantidad, x, y, y2, tam) {
  for (let i=0; i<=cantidad; i++) {
    let tamMenor=tam/cantidad;
    let X1=map(i, 0, cantidad, x, x+tam-tamMenor);
    let tam1=map(i, 0, cantidad, tam, tamMenor);

    let Y2=map(i, 0, cantidad, y2, y2+tam-tamMenor);
    let tam2=map(i, 0, cantidad, tam, tamMenor);

    if (impar(i)) {
      fill(negro);
    } else {
      fill(255);
    }
    triangulo1(X1, y, tam1);

    if (impar(i)) {
      fill(255);
    } else {
      fill(negro);
    }
    triangulo2(x, Y2, tam2);
  }
}

function impar( posicion) {
  return posicion%2===1;
}

/*Hice otro if para cambiar el orden de los colores porque comenzaba pintando el triangulo del fondo color blanco, mientras que
 el ultimo quad de la funcion anterior es blanco, quedando un espacio blanco sin completar; Además, en la obra original las esquinas
 dentro del rect son de diferentes colores.*/
