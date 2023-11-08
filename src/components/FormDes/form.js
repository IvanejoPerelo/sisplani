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
        label: "Tipo descuento",
        name: "tipodes",
        isSelect: true,
        default: "DEFAULT",
        data: [
            {
                value: "Fijo",
                option: "Fijo",
            },
            {
                value: "Variable",
                option: "Variable",
            },
        ]
    },
    {
        label: "Monto:",
        name: "montodes",
    },
]