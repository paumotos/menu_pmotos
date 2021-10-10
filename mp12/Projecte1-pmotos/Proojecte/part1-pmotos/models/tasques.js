const { v4: uuidv4 } = require("uuid");

class Tasques {
  id = "";
  nom = "";
  completada = null;

  constructor(nom, completada) {
    this.id = uuidv4();
    this.nom = nom;
    this.completada = completada;
  }
}

module.exports = Tasques;
