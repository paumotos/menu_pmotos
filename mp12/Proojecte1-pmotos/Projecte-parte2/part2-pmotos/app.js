require("colors");

const { guardarDB, readDB } = require("./helpers/guardarFitxers");

const {
  inquirerMenu,
  pausa,
  fReserva,
  cReserva,
  fElimina,
  cElimina,
} = require("./helpers/inquirer");
const Reserves = require("./models/reserva");

const ReservesPendents = require("./models/reservesPendents");
const Sala = require("./models/sala");

const main = async () => {
  let opt = "";
  const reserves = new Reserves();
  const reservesPendents = new ReservesPendents();

  const reservesDB = readDB();

  if (reservesDB) {
    // si hi ha dades, carrégales
    reservesPendents.carregarReservesFromArray(reservesDB);
  }
  do {
    opt = await inquirerMenu();
    switch (opt) {
      case "1":
        const fRes = await fReserva("Indica la fila: ");
        const cRes = await cReserva("Indica la columna: ");
        reserves.guardarReserva(fRes, cRes);
        reserves.mostrarSala();
        break;
      case "2":
        reserves.mostrarSala();
        break;
      case "3":
        reserves.reconteReserves();
        break;
      case "4":
        const fElim = await fElimina("Indica la fila: ");
        const cElim = await cElimina("Indica la columna: ");
        reserves.eliminarReserva(fElim, cElim);
        reserves.mostrarSala();
        break;
      default:
        break;
    }

    guardarDB(reservesPendents.reservaArr);
    await pausa();
  } while (opt !== "0");
};

main();
