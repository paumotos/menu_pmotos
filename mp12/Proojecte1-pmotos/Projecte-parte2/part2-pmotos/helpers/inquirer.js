const inquirer = require("inquirer");
const { async } = require("rxjs");
//const Tasques = require("../models/tasques");
require("colors");

const preguntes = [
  {
    type: "list",
    name: "opcio",
    message: "Que vols fer? ",
    choices: [
      {
        value: "1",
        name: `${"1 ".green} Nova reserva`,
      },
      {
        value: "2",
        name: `${"2 ".green} Mostrar sala`,
      },
      {
        value: "3",
        name: `${"3 ".green} Mostrar recaudació`,
      },
      {
        value: "4",
        name: `${"4 ".green} Eliminar reserva`,
      },
      {
        value: "0",
        name: `${"0 ".green} Sortir`,
      },
    ],
  },
];

const inquirerMenu = async () => {
  console.clear();
  console.log("=========================================".green);
  console.log(
    `${"=".green} S E L E C C I O N A  U N A  O P C I O ${"=".green}`
  );
  console.log("=========================================".green);

  const { opcio } = await inquirer.prompt(preguntes);
  return opcio;
};

const pausa = async () => {
  const question = [
    {
      type: "input",
      name: "enter",
      message: `Presiona ${"enter".yellow} per a continuar`,
    },
  ];
  console.log("\n");
  await inquirer.prompt(question);
};

const fReserva = async (message) => {
  const fila = [
    {
      type: "input",
      name: "nom",
      message,
      validate(value) {
        if (value <= 0 && value > 6) {
          return "Valor fora de rang";
        }
        return true;
      },
    },
  ];
  const { nom } = await inquirer.prompt(fila);
  return nom;
};

const cReserva = async (message) => {
  const columna = [
    {
      type: "input",
      name: "nom",
      message,
      validate(value) {
        if (value <= 0 && value > 7) {
          return "Valor fora de rang";
        }
        return true;
      },
    },
  ];
  const { nom } = await inquirer.prompt(columna);
  return nom;
};

const fElimina = async (message) => {
  const fila = [
    {
      type: "input",
      name: "nom",
      message,
      validate(value) {
        if (value <= 0 && value > 6) {
          return "Valor fora de rang";
        }
        return true;
      },
    },
  ];
  const { nom } = await inquirer.prompt(fila);
  return nom;
};

const cElimina = async (message) => {
  const columna = [
    {
      type: "input",
      name: "nom",
      message,
      validate(value) {
        if (value <= 0 && value > 7) {
          return "Valor fora de rang";
        }
        return true;
      },
    },
  ];
  const { nom } = await inquirer.prompt(columna);
  return nom;
};

module.exports = {
  inquirerMenu,
  pausa,
  fReserva,
  cReserva,
  fElimina,
  cElimina,
};
