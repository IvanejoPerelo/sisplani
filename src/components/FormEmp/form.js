export const inputs =[
    {
        label: "DNI: ", 
        name: "dni",
    },
    {
        label: "Apellido Paterno: ",
        name: "apellido_p",
    },
    {
        label: "Apellido Materno: ", 
        name: "apellido_m",
    },
    {
        label: "Nombres: ",
        name: "nombres",
    },
    {
        label: "Sexo: ",
        name: "sexo",
        isSelect: true,
        data: [
            {
                value: "F",
                option: "Femenino",
            },
            {
                value: "M",
                option: "Masculino",
            },
            {
                value: "O",
                option: "Otros",
            },
        ]
    },
    {
        label: "Dirección: ",
        name: "direccion",
    },
    {
        label: "Regimen Laboral: ",
        name: "regimen_lab",
        isSelect: true,
        data: [
            {
                value: "DL276",
                option: "Decreto Legislativo N° 276",
            },
            {
                value: "DL728",
                option: "Decreto Legislativo N° 728",
            },
        ]
    },
    {
        label: "Categoria Ocupacional: ",
        name: "categoria_ocu",
        isSelect: true,
        data: [
            {
                value: "E",
                option: "Ejecutivo",
            },
            {
                value: "P",
                option: "Profesional",
            },
            {
                value: "T",
                option: "Técnico",
            },
            {
                value: "A",
                option: "Auxiliar",
            },
        ]
    },
    {
        label: "Cargo: ",
        name: "cargo",
    },
    {
        label: "Regimen Pensionario: ",
        name: "regimen_pen",
        isSelect: true,
        data: [
            {
                value: "ONP",
                option: "DL N° 19990 - ONP",
            },
            {
                value: "SPP",
                option: "DL N° 20530 - SPP",
            },
            {
                value: "O",
                option: "Otros",
            },
        ]
    },
    {
        label: "Remuneración Básica: ",
        name: "remuneracion",
    },
    {
        label: "Fecha de ingreso: ",
        name: "fecha_ing",
        type: "date"
    },
    {
        label: "Tipo de Usuario: ",
        name: "tipo_log",
        isSelect: true,
        data: [
            {
                value: "E",
                option: "Empleado",
            },
            {
                value: "A",
                option: "Administrador",
            },
        ]
        
    },
    
    
]