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

  completades() {
    console.log(); // sóc un salt de línia

    let conta = 0;
    this.llistatArr.forEach((tasca) => {
      const { nom } = tasca;
      conta += 1;
      if (tasca.completada) {
        conta++;
        console.log(`${(conta + ".").green} ${nom.cyan}`);
      }
    });
  }

  noCompletades() {
    console.log(); // sóc un salt de línia

    let conta = 0;
    this.llistatArr.forEach((tasca) => {
      const { nom } = tasca;
      conta += 1;
      if (!tasca.completada) {
        conta++;
        console.log(`${(conta + ".").green} ${nom.cyan}`);
      }
    });
  }

  toggleCompletadas(ids = []) {
    // Posem els completats
    ids.forEach((id) => {
      const t = this._llista[id];
      if (!tasca.completada) {
        this._llista[id].completada = new Date().toString();
      }
    });

    // Posem null als que no
    this.llistatArr.forEach((Tasca) => {
      if (!ids.includes(Tasca.id)) {
        this._llista[tasca.id].completada = null;
      }
    });
  }

  async eliminarTasca(id) {
    delete this._llista[id];
  }
}

module.exports = TasquesPendents;
