var inquirer = require("inquirer");
const tasquesPendents = require("./models/tasquesPendents");

inquirer.registerPrompt(
  "checkbox-plus",
  require("inquirer-checkbox-plus-prompt")
);

const tasquesDB = readDB();

if (tasquesDB) {
  // si hi ha dades, carrégales
  tasques.carregarTasquesFromArray(tasquesDB);
}

inquirer.prompt([
  {
    type: "checkbox-plus",
    name: "tasques",
    message: "Marca les tasques completades: ",
  },
]);
