import { useState } from "react";
import {
  Button,
  Card,
  Frame,
  SelectOptions,
  TextField,
} from "../../components";
import { create } from "../../services";
import Swal from "sweetalert2";

export default function FormEmp({modify, value}) {
  const urlNumber = false;
  const url = "empleados";
  const [textDni, setTextDni] = useState(modify ? value.dni : "");
  const [textApePat, setTextApePat] = useState(modify ? value.apellido_p : "");
  const [textApeMat, setTextApeMat] = useState(modify ? value.apellido_m : "");
  const [textNombres, setTextNombres] = useState(modify ? value.nombres : "");
  const [textDireccion, setTextDireccion] = useState(modify ? value.direccion : "");
  const [textCargo, setTextCargo] = useState(modify ? value.cargo : "");
  const [textRemu, setTextRemu] = useState(modify ? value.remuneracion : "");

  const [selectSexo, setSelectSexo] = useState(modify ? value.sexo : "");
  const [selectRegimen, setSelectRegimen] = useState(modify ? value.regimen_lab : "");
  const [selectCategoria, setSelectCategoria] = useState(modify ? value.categoria_ocu : "");
  const [selectPensionario, setSelectPensionario] = useState(modify ? value.regimen_pen : "");
  const [selectAfp, setSelectAfp] = useState(modify ? value.afp : "");;

  const sexo = [
    { value: "M", option: "Masculino" },
    { value: "F", option: "Femenino" },
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

  const handleInputChangeD = (e) => setTextDni(e.target.value);
  const handleInputChangeAP = (e) => setTextApePat(e.target.value);
  const handleInputChangeAM = (e) => setTextApeMat(e.target.value);
  const handleInputChangeN = (e) => setTextNombres(e.target.value);
  const handleInputChangeDi = (e) => setTextDireccion(e.target.value);
  const handleInputChangeC = (e) => setTextCargo(e.target.value);
  const handleInputChangeR = (e) => setTextRemu(e.target.value);

  const handleSelectSexo = (e) => setSelectSexo(e.target.value)
  const handleSelectRegimen = (e) => setSelectRegimen(e.target.value);
  const handleSelectCategoria = (e) => setSelectCategoria(e.target.value);
  const handleSelectPensionario = (e) => setSelectPensionario(e.target.value)
  const handleSelectAfp = (e) => setSelectAfp(e.target.value);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (
      !textDni ||
      !textApeMat ||
      !textApePat ||
      !textNombres ||
      !textDireccion ||
      !textCargo ||
      !textRemu
    ) {
      Swal.fire({
        title: "Error",
        text: "Completa el campo de tareas",
        icon: "error",
      });
      return;
    }

    await create(
      urlNumber,
      {
        dni: textDni,
        apellido_p: textApePat,
        apellido_m: textApeMat,
        nombres: textNombres,
        sexo: selectSexo,
        direccion: textDireccion,
        regimen_lab: selectRegimen,
        categoria_ocu: selectCategoria,
        cargo: textCargo,
        regimen_pen: selectPensionario,
        afp: selectAfp,
        remuneracion: textRemu,
        estado: "A"
      },
      url
    );

    Swal.fire({
      title: "Success",
      text: "Se grabo correctamente",
      icon: "success",
    });

    setTextDni("");
    setTextNombres("");
    setTextApePat("");
    setTextApeMat("");
    setTextDireccion("");
    setTextCargo("");
    setTextRemu("");


  };

  return (
      <form onSubmit={handleFormSubmit}>
        <Card className="items-center justify-center bg-gray-50">
          <div className="w-[850px] text-white p-1 mt-3 mb-1">
            <h1 className="bg-gray-700 font-semibold text-xl px-2">{modify ===true ? "Modificación de Empleado" :  "Registro de Empleado"}</h1>

            <Card className="border rounded shadow-lg mt-3 mb-3 text-xs">
              <h2 className="mt-2 mb-2 text-sm text-white bg-red-700 font-semibold px-1 underline p-1">
                Datos Personales
              </h2>

              <div className="flex flex-row justify-left">
                <div className="w-[90%] pr-2">
                  <div className="mb-2 grid grid-cols-2 gap-5">
                    <TextField
                      label="DNI"
                      name="dni"
                      value ={textDni}
                      onChange={handleInputChangeD}
                    />
                    <TextField
                      label="Nombres"
                      name="nombres"
                      value={textNombres}
                      onChange={handleInputChangeN}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-5">
                    <TextField
                      label="Apellido Paterno"
                      name="apepaterno"
                      value ={textApePat}
                      onChange={handleInputChangeAP}
                    />
                    <TextField
                      label="Apellido Materno"
                      name="apermaterno"
                      value={textApeMat}
                      onChange={handleInputChangeAM}
                    />
                  </div>
                </div>

                <div className="w-[10%] h-24 bg-white border">
                  <img
                    src={
                      selectSexo === "M"
                        ? "./src/assets/hombre.png"
                        : selectSexo === "F"
                        ? "./src/assets/mujer.png"
                        : "hidden"
                    }
                    className="w-[90%] h-[90%] p-1 mx-auto"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-5 mb-3 items-center justify-center">
                <SelectOptions
                  titulo={"Sexo"}
                  onChange={handleSelectSexo}
                  arrayselect={sexo}
                  value={selectSexo}

                />
                {/*                 {rowselect.sexo} */}
                <TextField
                  label="Dirección"
                  name="direccion"
                  value ={textDireccion}
                  onChange={handleInputChangeDi}
                />
              </div>
            </Card>

            <Card className="border rounded shadow-lg flex flex-col mt-3 mb-3 text-xs">
              <h2 className="mt-2 mb-3 text-sm text-white bg-red-700 font-semibold px-1 underline p-1">
                Datos Laborales
              </h2>

              <div className="grid grid-cols-2 gap-5 items-left mb-3">
                <SelectOptions
                  titulo={"Regimen Laboral"}
                  onChange={handleSelectRegimen}
                  arrayselect={regimen}
                  value={selectRegimen}
                  /*                   rowSelect={rowselect}
                  valueSelect={rowselect.regimen_lab} */
                />
                <SelectOptions
                  titulo={"Categoria Ocupacional"}
                  onChange={handleSelectCategoria}
                  arrayselect={categoria}
                  value={selectCategoria}
                />
              </div>

              <div className="grid grid-cols-2 gap-5 items-center mb-3">
                <TextField
                  label="Cargo"
                  name="cargo"
                  value={textCargo}
                  onChange={handleInputChangeC}
                />
                <TextField
                  label="Remuneración Básica"
                  name="remuneracion"
                  value={textRemu}
                  onChange={handleInputChangeR}
                />
              </div>

              <div className="grid grid-cols-2 gap-5 items-center mb-3">
                <SelectOptions
                  titulo={"Regimen Pensionario"}
                  onChange={handleSelectPensionario}
                  arrayselect={pensionario}
                  value={selectPensionario}
                />

                <SelectOptions
                  titulo={"AFP"}
                  onChange={handleSelectAfp}
                  arrayselect={afp}
                  disabled = {
                    selectPensionario === "ONP" ? true : false
                  }
                  value={selectAfp}
                />
              </div>
            </Card>
          </div>
          <div className="w-[50%] flex items-center justify-right gap-4">
            <Button text="Grabar Empleado" type="submit" />
            <Button text="Salir" type="button" />
          </div>
        </Card>
      </form>

  );
}