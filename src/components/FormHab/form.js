export const inputs = [
  {
    label: "Nombre:",
    name: "nombre",
  },
  {
    label: "Descripción:",
    name: "descripcion",
  },
  {
    label: "Periodo",
    name: "meshab",
    isSelect: true,
    default: "DEFAULT",
    data: [
      {
        value: "Mensual",
        option: "Mensual",
      },
      {
        value: "Trimestral",
        option: "Trimestral",
      },
      {
        value: "Semestral",
        option: "Semestral",
      },
      {
        value: "Anual",
        option: "Anual",
      },
    ],
  },
  // {
  //     label: "Variable:",
  //     name: "variablehab",
  // },
  {
    label: "Formula:",
    name: "formulahab",
  },
];
