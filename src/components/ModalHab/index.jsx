import { Dialog } from "@headlessui/react";
import {
  Button,
  Card,
  FormHab,
  SelectOptions,
  TextField,
} from "../../components";
import { update } from "../../services";
import { useState } from "react";
import Swal from "sweetalert2";

export default function ModalHab({ value, getHab }) {
  const [open, setOpen] = useState(false);
  const urlNumber = true;
  const url = "items";
  const [textNombre, setTextNombre] = useState(value.nombre);
  const [textDescripcion, setTextDescripcion] = useState(value.descripcion);
  const [selectMesHab, setSelectMesHab] = useState(value.meshab);
  const [textFormula, setTextFormula] = useState(value.formulahab);

  const handleInputChangeN = (e) => setTextNombre(e.target.value);
  const handleInputChangeD = (e) => setTextDescripcion(e.target.value);
  const handleInputChangeF = (e) => setTextMontoDes(e.target.value);

  const handleSelectMesHab = (e) => setSelectMesHab(e.target.value);

  const periodicidad = [
    { value: "Mensual", option: "Mensual" },
    { value: "Trimestral", option: "Trimestral" },
    { value: "Semestral", option: "Semestral" },
    { value: "Anual", option: "Anual" },
  ];

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    await update(
      urlNumber,
      value.id,
      {
        nombre: textNombre,
        descripcion: textDescripcion,
        meshab: selectMesHab,
        formulahab: textFormula,
      },
      url
    );
    Swal.fire({
      title: "Success",
      icon: "success",
      text: "Se actualizo correctamente",
    });

    setOpen(false);
    await getHab();
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
                  <div className="w-[500px]  text-white p-1 mt-3 mb-2">
                    <h1 className="bg-gray-700 font-semibold text-xl px-2 text-center">
                      Modificación de Haberes
                    </h1>
                    <Card className="border rounded shadow-lg mt-3 mb-3 text-xs ">
                      <span className="text-right p-2 font-semibold">
                        {`Código: ${value.codigo}`}
                      </span>
                      <div className="grid grid-cols-1 gap-5 mb-1 items-center">
                        <TextField
                          label="Nombre:"
                          name="nombrehab"
                          value={textNombre}
                          onChange={handleInputChangeN}
                        />

                        <TextField
                          label="Descripcion:"
                          name="descripcionhab"
                          value={textDescripcion}
                          onChange={handleInputChangeD}
                        />

                        <SelectOptions
                          titulo={"Período:"}
                          onChange={handleSelectMesHab}
                          arrayselect={periodicidad}
                          value={selectMesHab}
                        />

                        <TextField
                          label="Formula:"
                          name="formulahab"
                          value={textFormula}
                          onChange={handleInputChangeF}
                        />
                      </div>
                      <div className="mt-5">
                        <Button text="Modificar Haber" type="submit" />
                      </div>
                    </Card>
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
