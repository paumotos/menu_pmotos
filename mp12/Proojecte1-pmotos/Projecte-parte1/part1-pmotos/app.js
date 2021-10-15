require("colors");

const { guardarDB, readDB } = require("./helpers/guardarFitxers");

const {
  inquirerMenu,
  pausa,
  novaTasca,
  tasquesSelect,
  confirmar,
  ts,
} = require("./helpers/inquirer");

const tasquesPendents = require("./models/tasquesPendents");

const main = async () => {
  let opt = "";
  const tasques = new tasquesPendents();

  const tasquesDB = readDB();

  if (tasquesDB) {
    // si hi ha dades, carrégales
    tasques.carregarTasquesFromArray(tasquesDB);
  }
  do {
    opt = await inquirerMenu();

    switch (opt) {
      case "1":
        const nomTasca = await novaTasca("Nova tasca:");
        tasques.crearTasca(nomTasca);
        break;
      case "2":
        tasques.llistarTasques();
        break;
      case "3":
        tasques.tareasCom();
        break;
      case "4":
        tasques.tareasNocom();
        break;
      case "5":
        const id1 = await tasquesSelect(tasques.llistatArr);
        break;
      case "6":
        const id2 = await ts(tasques.llistatArr);
        console.log(id2);
        if (id2 !== 0) {
          const ok = await confirmar("Segur que vols eliminar?");
          if (ok) {
            tasques.eliminarTasca(id2);
            console.log("Tasca eliminada!");
          } else {
            console.log("La tasca no ha sigut eliminat");
          }
        }
        break;
      default:
        break;
    }

    guardarDB(tasques.llistatArr);
    await pausa();
  } while (opt !== "0");
};

main();
