import { useState } from "react";
import {
  Button,
  Card,
  SelectOptions,
  TextField,
} from "../../components";
import { create } from "../../services";
import Swal from "sweetalert2";

export default function FormEmp() {
  const urlNumber=false
  const url= "empleados"

  const [textDni, setTextDni] = useState("");
  const [textApePat, setTextApePat] = useState("");
  const [textApeMat, setTextApeMat] = useState("");
  const [textNombres, setTextNombres] = useState("");
  const [textDireccion, setTextDireccion] = useState("");
  const [textCargo, setTextCargo] = useState("");
  const [textRemu, setTextRemu] = useState("");

  const [selectSexo, setSelectSexo] = useState("");
  const [selectRegimen, setSelectRegimen] = useState("");
  const [selectCategoria, setSelectCategoria] = useState("");
  const [selectPensionario, setSelectPensionario] = useState("");
  const [selectAfp, setSelectAfp] = useState("");

  const sexo = [
    { value: "M", option: "Masculino" },
    { value: "F", option: "Femenino" },
    { value: "O", option: "Otros" },
  ];

  const regimen = [
    { value: "DL276", option: "Decreto Legislativo N° 276" },
    { value: "DL728", option: "Decreto Legislativo N° 728" },
  ];

  const categoria = [
    { value: "E", option: "Ejecutivo" },
    { value: "P", option: "Profesional" },
    { value: "T", option: "Técnico" },
    { value: "A", option: "Auxiliar" },
  ];

  const pensionario = [
    { value: "ONP", option: "DL N° 19990 - ONP" },
    { value: "SPP", option: "DL N° 20530 - SPP" },
    { value: "O", option: "Otros" },
  ];

  const afp = [
    { value: "I", option: "Integra" },
    { value: "P", option: "Profuturo" },
    { value: "H", option: "Habitat" },
    { value: "P", option: "Prima" },
  ];

  const handleInputChangeD =(e) => setTextDni(e.target.value);
  const handleInputChangeAP =(e) => setTextApePat(e.target.value);
  const handleInputChangeAM =(e) => setTextApeMat(e.target.value);
  const handleInputChangeN =(e) => setTextNombres(e.target.value);
  const handleInputChangeDi =(e) => setTextDireccion(e.target.value);
  const handleInputChangeC =(e) => setTextCargo(e.target.value);
  const handleInputChangeR =(e) => setTextRemu(e.target.value);


  const handleSelectSexo = (e) => setSelectSexo(e.target.value);
  const handleSelectRegimen = (e) => setSelectRegimen(e.target.value);
  const handleSelectCategoria = (e) => setSelectCategoria(e.target.value);
  const handleSelectPensionario = (e) => setSelectPensionario(e.target.value);
  const handleSelectAfp = (e) => setSelectAfp(e.target.value);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    if (!textDni || !textApeMat || !textApePat || !textNombres || !textDireccion || !textCargo || !textRemu) {
      Swal.fire({
        title: "Error",
        text: "Completa el campo de tareas",
        icon: "error",
      });
      return;
    }
  
  const response = await create (urlNumber,{
    dni: textDni,
    apellido_p: textApeMat,
    apellido_m: textApeMat,
    nombres: textNombres,
    sexo: selectSexo,
    direccion: textDireccion,
    regimen_lab: selectRegimen,
    categoria_ocu: selectCategoria,
    cargo: textCargo,
    regimen_pen: selectPensionario,
    afp: selectAfp,
    remuneracion:textRemu
  }, url);

  Swal.fire ({
    title: "Success",
    text: "Se grabo correctamente",
    icon: "success",
  });
  }

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <Card className="items-center justify-center bg-gray-50">
          <div className="w-full  text-white p-1 mt-3 mb-1">
            <h1 className="bg-gray-700 font-semibold text-xl px-2">
              Registro de Trabajadores
            </h1>

            <Card className="border rounded shadow-lg mt-3 mb-3 text-xs">
              <h2 className="mt-2 text-sm text-red-700 font-semibold px-1 underline">
                Datos Personales
              </h2>

              <div className="flex flex-row items-center justify-left">
                <div className="w-[80%] pr-2">
                  <div className="grid grid-cols-3 gap-5 items-center justify-center mb-2">
                    <TextField label="DNI" name="dni" />
                    <TextField label="Apellido Paterno" name="apepaterno" />
                    <TextField label="Apellido Materno" name="apermaterno" />
                  </div>

                  <TextField label="Nombres" name="nombres" />
                </div>

                <div className="w-[20%] h-full p-1">
                  <TextField label="Foto" name="foto" className={"h-[80px]"} />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-5 mb-3 items-center justify-center">
                <SelectOptions
                  titulo={"Sexo"}
                  onChange={handleSelectSexo}
                  arrayselect={sexo}
                />
                <TextField label="Dirección" name="direccion" />
              </div>
            </Card>

            <Card className="border rounded shadow-lg flex flex-col mt-3 mb-3 text-xs">
              <h2 className="mt-2 mb-3 text-sm text-red-700 font-semibold px-1 underline">
                Datos Laborales
              </h2>

              <div className="flex flex-col items-left mb-3">
                <SelectOptions
                  titulo={"Regimen Laboral"}
                  onChange={handleSelectRegimen}
                  arrayselect={regimen}
                />
              </div>

              <div className="grid grid-cols-2 gap-5 items-center mb-3">
                <SelectOptions
                  titulo={"Categoria Ocupacional"}
                  onChange={handleSelectCategoria}
                  arrayselect={categoria}
                />
                <TextField label="Cargo" name="cargo" />
              </div>

              <div className="grid grid-cols-3 gap-5 items-center mb-3">
                <SelectOptions
                  titulo={"Regimen Pensionario"}
                  onChange={handleSelectPensionario}
                  arrayselect={pensionario}
                />
                <SelectOptions
                  titulo={"AFP"}
                  onChange={handleSelectAfp}
                  arrayselect={afp}
                />
                <TextField label="Remuneración Básica" name="remuneracion" />
              </div>
            </Card>
          </div>
          <div className="w-[50%] flex items-center justify-right gap-4">
            <Button text="Grabar Empleado" type="submit" />
            <Button text="Salir" type="button" />
          </div>
        </Card>
      </form>
    </>
  );
}
