import { FormLogin, Card } from "../../components";
import { inputs } from "./form";
import { useForm } from "../../hooks/useForm";
import { create, read } from "../../services";
import { useCod } from "../../hooks/useCod";
import Swal from "sweetalert2";

export default function FormDes({modify, value}) {
  const urlNumber = true;
  const item = "DES";
  const url = "items";
  const tipo = "D";
  const { prefijo, getCod } = useCod(item, url, tipo);

  const { values, errors, handleInputChange, validateIfValuesHasEmpty, cleanInput, } = useForm({
    nombre: "",
    descripcion: "",
    tipodes: "",
    // tipo,
    montodes: "",
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    // debugger
    values.codigo = prefijo;
    if (!validateIfValuesHasEmpty()) return;
    values.tipo = tipo
    await create(urlNumber, values, url);
    if (values) {
      cleanInput();
      await getCod();
      Swal.fire({
        title: "Success",
        text: "Se creó la tarea correctamente",
        icon: "success",
      });
      return;
    }
  };
  return (
    <>
    <Card className="items-center justify-center bg-gray-50">
      <div className="w-[500px] text-white p-1 mt-3 mb-2">
        <h1 className="bg-gray-700 font-semibold text-xl px-2 text-center">
        {modify ===true ? "Modificación de Descuentos" :  "Registro de Descuentos"}
        </h1> 
      </div>
      <Card className="w-[490px] border rounded shadow-lg mt-3 mb-3 text-xs ">
        <span className="text-right">{`Código: ${prefijo}`}</span>    
        <div className="items-center justify-center gap-3 mb-2 mt-2">
          <FormLogin
            inputs={inputs}
            errors={errors}
            handleFormSubmit={handleFormSubmit}
            handleInputChange={handleInputChange}
            textButton="Registrar"
            values={values}
            
          />
        </div>
      </Card>
      {console.log(values)}
    </Card>

      {/* <form onSubmit={handleFormSubmit}>
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
                <SelectOptions
                    titulo={"Tipo"}
                    onChange={handleSelectTipo}
                    arrayselect={tipo}
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
      </form> */}
    </>
  );
}