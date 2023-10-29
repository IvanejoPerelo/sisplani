import { Button, Card, TextField } from "../../components";
import { useState } from "react";
import Swal from "sweetalert2";
import { createAfp } from "../../services";

export default function FormApo() {
  const [textNombre, setTextNombre] = useState("");
  const [textDescripcion, setTextDescripcion] = useState("");
  const [textPorcentaje, setTextPorcentaje] = useState("0.00");

  const handleInputChangeN = (e) => setTextNombre(e.target.value);
  const handleInputChangeD = (e) => setTextDescripcion(e.target.value);
  const handleInputChangeP = (e) => setTextPorcentaje(e.target.value);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!textNombre || !textDescripcion || !textPorcentaje) {
        Swal.fire({
          title: "Error",
          text: "Completa el campo de nombre",
          icon: "error",
        });
        return;
      }

      const response = await createAfp({
        nombre: textNombre,
        descripcion: textDescripcion,
        seguros: textPorcentaje,
      });
     }



  

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <Card className="items-center justify-center bg-gray-50">
          <div className="w-full  text-white p-1 mt-3 mb-2">
            <h1 className="bg-red-700 font-semibold text-xl px-2">
              Registro de Aportaciones
            </h1>
            <Card className="border rounded shadow-lg mt-3 mb-3 text-xs ">
              <div className="flex flex-row items-center justify-end gap-3 mb-2 mt-2">
                <span>Código:</span>
                <label
                  htmlFor=""
                  className="bg-red-100 w-[20%] rounded border py-1 text-center font-bold"
                >
                  AP-1
                </label>
              </div>

              <div className="flex flex-col items-left mx-1 mb-1">
                <TextField
                  label="Nombre:"
                  name="nombreapo"
                  value={textNombre}
                  onChange={handleInputChangeN}
                />
              </div>

              <div className="grid grid-cols-2 gap-5 mx-1  mb-2 items-center">
                <TextField
                  label="Descripción:"
                  name="descripcionapo"
                  value={textDescripcion}
                  onChange={handleInputChangeD}
                />

                <TextField
                  label="Porcentaje (%):"
                  name="porcentajeapo"
                  value={textPorcentaje}
                  onChange={handleInputChangeP}
                />
              </div>
            </Card>
          </div>
          <div className="w-[50%] flex items-center justify-right gap-4">
            <Button text="Grabar AFP" type="submit" />
            <Button text="Salir" type="button" />
          </div>
        </Card>
      </form>
    </>
  );
}
