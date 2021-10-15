const tasca = require("./tasques");

class TasquesPendents {
  _llista = {
    abc: 123,
  };

  get llistatArr() {
    const llistat = [];
    Object.keys(this._llista).forEach((key) => {
      const t = this._llista[key];
      llistat.push(t);
    });

    return llistat;
  }

  constructor() {
    this._llista = {};
  }

  crearTasca(nom = "", completada) {
    const t = new tasca(nom, completada);
    this._llista[t.id] = t;
  }

  llistarTasques() {
    console.log(); // sóc un salt de línia

    let conta = 0;
    this.llistatArr.forEach((tasca) => {
      const { nom, completada } = tasca;
      conta += 1;
      console.log(`${(conta + ".").green} ${nom.cyan}`);
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
      if (tasca.completada == 0) {
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
      if (tasca.completada == null) {
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
      if (t.completada == null) {
        this._llista[t.id].completada = "0";
      }
    });

    // Posem null als que no
    this.llistatArr.forEach((t) => {
      if (!ids.includes(t.id)) {
        this._llista[t.id].completada = null;
      }
    });
  }

  async eliminarTasca(id) {
    delete this._llista[id];
  }
}

module.exports = TasquesPendents;
