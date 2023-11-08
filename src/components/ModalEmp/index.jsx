import { Dialog } from "@headlessui/react";
import { useState } from "react";
import { Button, Card, SelectOptions, TextField } from "../../components";
import { update } from "../../services";
import Swal from "sweetalert2";

export default function ModalEmp({ value, getEmp }) {
  const [open, setOpen] = useState(false);
  const urlNumber = false;
  const url = "empleados";
  const [textDni, setTextDni] = useState(value.dni);
  const [textApePat, setTextApePat] = useState(value.apellido_p);
  const [textApeMat, setTextApeMat] = useState(value.apellido_m);
  const [textNombres, setTextNombres] = useState(value.nombres);
  const [textDireccion, setTextDireccion] = useState(value.direccion);
  const [textCargo, setTextCargo] = useState(value.cargo);
  const [textRemu, setTextRemu] = useState(value.remuneracion);
  const [selectSexo, setSelectSexo] = useState(value.sexo);
  const [selectRegimen, setSelectRegimen] = useState(value.regimen_lab);
  const [selectCategoria, setSelectCategoria] = useState(value.categoria_ocu);
  const [selectPensionario, setSelectPensionario] = useState(value.regimen_pen);
  const [selectAfp, setSelectAfp] = useState(value.afp);

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

  const handleSelectSexo = (e) => setSelectSexo(e.target.value);
  const handleSelectRegimen = (e) => setSelectRegimen(e.target.value);
  const handleSelectCategoria = (e) => setSelectCategoria(e.target.value);
  const handleSelectPensionario = (e) => setSelectPensionario(e.target.value);
  const handleSelectAfp = (e) => setSelectAfp(e.target.value);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    await update(
      urlNumber,
      value.id,
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
      },
      url
    );

    Swal.fire({
      title: "Success",
      icon: "success",
      text: "Se actualizo correctamente",
    });
    await getEmp();
  };

  return (
    <>
      <td className="px-4 py-4">
        <a
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer"
          onClick={() => {
            setOpen(true);
          }}
        >
          Editar
        </a>
      </td>
      <Dialog
        className={"relative z-50"}
        open={open}
        onClose={() => setOpen(false)}
      >
        <div className="fixed inset-0 bg-black/30" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="bg-white mx-auto  rounded p-4 ">
            <div className="flex items-center justify-center">
              <form onSubmit={handleFormSubmit}>
                <Card className="items-center justify-center bg-gray-50">
                  <div className="w-[850px] text-white p-1 mt-3 mb-1">
                    <h1 className="bg-gray-700 text-center font-semibold text-xl px-2">
                      Modificación de Empleado
                    </h1>

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
                              value={textDni}
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
                              value={textApePat}
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
                          value={textDireccion}
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
                          disabled={selectPensionario === "ONP" ? true : false}
                          value={selectAfp}
                        />
                      </div>
                    </Card>
                  </div>
                  <div className="w-[50%] flex items-center justify-right gap-4">
                    <Button text="Grabar Empleado" type="submit" />
                  </div>
                </Card>
              </form>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}
