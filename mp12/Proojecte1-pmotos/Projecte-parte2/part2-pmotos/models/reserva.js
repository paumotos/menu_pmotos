const sala = require("./sala");
const reservesPendents = require("./reservesPendents");
const { v4: uuidv4 } = require("uuid");

class Reserves {
  id;
  fila;
  columna;
  arrSala;

  constructor(fila, columna) {
    this.id = uuidv4();
    this.fila = fila;
    this.columna = columna;
    this.arrSala = new sala();
  }

  mostrarSala() {
    let fila;
    console.log();
    console.log(` __${"[P A N T A L L A]".bgWhite.black}__`);
    console.log("|                     |");
    console.log(`|    ${"1 2 3 4 5 6 7".grey}    |`);
    for (let i = 0; i < 6; i++) {
      fila = "";
      for (let x = 0; x < 7; x++) {
        if (this.arrSala.sala[i][x] == 0) {
          fila += " U".green;
        } else {
          fila += " U".red;
        }
      }
      console.log(`|  ${(i + 1 + "").grey}${fila}    |`);
    }
    console.log("|                     |");
    console.log("|________________/ ___|");
  }

  guardarReserva(fila, columna) {
    if (fila >= 0 && fila < 6 && columna >= 0 && columna < 7) {
      if (this.arrSala.sala[fila - 1][columna - 1] == 0) {
        this.arrSala.sala[fila - 1][columna - 1] += 1;
        reservesPendents.guardarReserva;
      } else {
        console.log("Butaca ocupada o no dispoible".red);
      }
    } else {
      console.log("La butaca seleccionada no existeix".red);
    }
  }

  eliminarReserva(fila, columna) {
    if (fila >= 0 && fila < 6 && columna >= 0 && columna < 7) {
      if (this.arrSala.sala[fila][columna] == 1) {
        this.arrSala.sala[fila][columna] = 0;
        delete reservesPendents._reserva[this.arrSala.sala.id];
      } else {
        console.log("Butaca dispoible".red);
      }
    } else {
      console.log("La butaca seleccionada no existeix".red);
    }
  }

  reconteReserves() {
    console.log();
    let conta = 0;
    this.arrSala.sala.forEach((sala) => {
      if (sala == 1) {
        conta + this.valor;
      }
    });
    console.log(`La recaudació de la sala es: ${(conta + "").green}`);
    return;
  }
}

module.exports = Reserves;
