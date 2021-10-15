const tasca = require("./tasques");

class TasquesPendents {
  _llista = {
    abc: 123,
  };

  get llistatArr() {
    const llistat = [];
    Object.keys(this._llista).forEach((key) => {
      const tasca = this._llista[key];
      llistat.push(tasca);
    });

    return llistat;
  }

  constructor() {
    this._llista = {};
  }

  crearTasca(nom = "") {
    const tasca = new tasca(nom);
    this._llista[tasca.id] = tasca;
  }

  llistarTasques() {
    console.log(); // sóc un salt de línia

    let conta = 0;
    this.llistatArr.forEach((tasca) => {
      const { nom, completada } = tasca;
      conta += 1;
      console.log(`${(conta + ".").green} ${nom.cyan} ${completada}`);
    });
  }

  carregarTasquesFromArray(tasques = []) {
    tasques.forEach((tasca) => {
      this._llista[tasca.id] = tasca;
    });
  }

  tareasCom() {
    console.log(); //soc un salt de linea
    let conta = 0;
    this.llistatArr.forEach((tasca) => {
      if (tasca.completada == true) {
        const { nom } = tasca;
        conta += 1;
        console.log(`${(conta + ".").green} ${nom}`);
      }
    });
    if (conta == 0) {
      console.log("No hay ninguna tarea completada");
    }
  }

  tareasNocom() {
    console.log(); //soc un salt de linea
    let conta = 0;
    this.llistatArr.forEach((tasca) => {
      if (tasca.completada == false) {
        const { nom } = tasca;
        conta += 1;
        console.log(`${(conta + ".").green} ${nom}`);
      }
    });
    if (conta == 0) {
      console.log("Todas las tareas estan completadas");
    }
  }

  toggleCompletadas(ids = []) {
    // Posem els completats
    ids.forEach((id) => {
      const t = this._llista[id];
      if (!t.completada) {
        this._llista[id].completada = true;
      }
    });

    // Posem null als que no
    this.llistatArr.forEach((Tasca) => {
      if (!ids.includes(Tasca.id)) {
        this._llista[tasca.id].completada = false;
      }
    });
  }

  async eliminarTasca(id) {
    delete this._llista[id];
  }
}

module.exports = TasquesPendents;
