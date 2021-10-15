const reserva = require("./reserva");
const sala = require("./sala");

class ReservesPendents {
  _reserva = {
    abc: 123,
  };

  constructor() {
    this._reserva = {};
  }

  get reservaArr() {
    const llistat = [];
    Object.keys(this._reserva).forEach((key) => {
      const reserva = this._reserva[key];
      llistat.push(reserva);
    });

    return llistat;
  }

  carregarReservesFromArray(reserves = []) {
    reserves.forEach((res) => {
      this._reserva[res.id] = res;
    });
  }

  guardarReserva(fila, columna){
    const res = new reserva();
    this._reserva(res.id) = res;
  }


}



module.exports = ReservesPendents;
