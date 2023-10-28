import TextField from "../TextField";
import SelectTri from "../SelectTri";
import Card from "../Card";
import Button from "../Button";
import { useState } from "react";
import { createDescuentos } from "../../services";
import Swal from "sweetalert2";

export default function FormDes() {
  const [textNombre, setTextNombre] = useState("");
  const [textDescripcion, setTextDescripcion] = useState("");
  const [selectTipo, setSelectTipo] = useState("");
  const [textMonto, setTextMonto] = useState("0.00");

  const handleInputChangeN = (e) => setTextNombre(e.target.value);
  const handleInputChangeD = (e) => setTextDescripcion(e.target.value);
  const handleSelectTipo = (e) => setSelectTipo(e.target.value);
  const handleInputChangeM = (e) => setTextMonto(e.target.value);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!textNombre || !textDescripcion) {
      Swal.fire({
        title: "Error",
        text: "Completar los campos",
        icon: "error",
      });
      return;
    }

    if (selectTipo == "") {
      Swal.fire({
        title: "Error",
        text: "Seleccionar opción",
        icon: "error",
      });
      return;
    }

    if (selectTipo == "V") {
      //Como hacer para que la caja de texto del  monto sea vuelva cero y disabled si esta en V
    }

    const response = await createDescuentos({
      nombredes: textNombre,
      descripciondes: textDescripcion,
      tipodes: selectTipo,
      montodes: textMonto,
    });

    setTextNombre("");
    setTextDescripcion("");
    setTextMonto("0.00");
    setSelectTipo("");
    // Como hacer para que el select vuelva a su estado inicial
    // Bloquear el text Monto

    Swal.fire({
      title: "Success",
      text: "Se grabo correctamente",
      icon: "success",
    });
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <Card className="items-center justify-center bg-gray-50">
          <div className="w-full  text-white p-1 mt-3 mb-2">
            <h1 className="bg-red-700 font-semibold text-xl px-2">
              Registro de Descuentos
            </h1>
            <Card className="border rounded shadow-lg mt-3 mb-3 text-xs ">
              <div className="flex flex-row items-center justify-end gap-3 mb-2 mt-2">
                <label htmlFor="">Código:</label>
                <label
                  htmlFor=""
                  className="bg-red-100 w-[20%] rounded border py-1 text-center font-bold"
                >
                  D-001
                </label>
              </div>

              <div className="flex flex-col items-left mx-1 mb-1">
                <TextField
                  label="Nombre:"
                  name="nombredes"
                  value={textNombre}
                  onChange={handleInputChangeN}
                />

                <TextField
                  label="Descripción:"
                  name="descripciondes"
                  value={textDescripcion}
                  onChange={handleInputChangeD}
                />
              </div>

              <div className="grid grid-cols-2 gap-5 mb-1 items-center">
                <div className="flex flex-col px-1">
                  <SelectTri
                    title={"Tipo"}
                    option1={"Fijo"}
                    value1={"F"}
                    option2={"Variable"}
                    value2={"V"}
                    option3={"Otros"}
                    value3={"O"}
                    onChange={handleSelectTipo}
                  />
                </div>
                <TextField
                  label="Monto:"
                  name="montodes"
                  value={textMonto}
                  onChange={handleInputChangeM}
                />
              </div>
            </Card>
          </div>
          <div className="w-full flex items-center justify-center gap-4">
            <Button text="Grabar Descuento" type="submit" />
            <Button text="Salir" type="button" />
          </div>
        </Card>
      </form>
    </>
  );
}
