import { FormLogin, Card } from "../../components";
import { inputs } from "./form";
import { useForm } from "../../hooks/useForm";
import { create, read } from "../../services";
import { useCod } from "../../hooks/useCod";
import Swal from "sweetalert2";

export default function FormHab({modify, value}) {
  const urlNumber = true;
  const item = "HAB";
  const url = "items";
  const tipo = "H";
  const { prefijo, getCod } = useCod(item, url, tipo);

  const {
    values,
    errors,
    handleInputChange,
    validateIfValuesHasEmpty,
    cleanInput,
  } = useForm(
    {
      nombre: "",
      descripcion: "",
      meshab: "",
      formulahab: "",
    },
    ["meshab"]
  );

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    values.codigo = prefijo;
    if (!validateIfValuesHasEmpty()) return;
    values.tipo = tipo;
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
    console.log(values);
  };
  return (
    <>
    <Card className="items-center justify-center bg-gray-50">
      <div className="w-[500px] text-white p-1 mt-3 mb-2">
        <h1 className="bg-gray-700 font-semibold text-xl px-2 text-center">
          {modify ===true ? "Modificación de Haberes" :  "Registro de Haberes"}
        </h1>
        <Card className="border rounded shadow-lg mt-3 mb-3 text-xs ">
          <span className="text-right">{`Código: ${prefijo}`}</span>
          <div className="gap-3 mb-2 mt-2">
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
        </div>
      </Card>
    </>
  );
  // const [textNombre, setTextNombre] = useState("");
  // const [textDescripcion, setTextDescripcion] = useState("");
  // const [selectPeriodo, setSelectPeriodo] = useState("");
  // const [textVariable, setTextVariable] = useState("");
  // const [textFormula, setTextFormula] = useState("");
  // const periodicidad = [
  //   {
  //     value: "M",
  //     option: "Mensual",
  //   },
  //   {
  //     value: "T",
  //     option: "Trimestral",
  //   },
  //   {
  //     value: "S",
  //     option: "Semestral",
  //   },
  //   {
  //     value: "A",
  //     option: "Anual",
  //   },
  // ];

  // const handleInputChangeN = (e) => setTextNombre(e.target.value);
  // const handleInputChangeD = (e) => setTextDescripcion(e.target.value);
  // const handleSelectPeriodo = (e) => setSelectPeriodo(e.target.value);
  // const handleInputChangeV = (e) => setTextVariable(e.target.value);
  // const handleInputChangeF = (e) => setTextFormula(e.target.value);

  // const handleFormSubmit = async (e) => {
  //   e.preventDefault();

  //   if (
  //     !textNombre ||
  //     !textDescripcion ||
  //     !textVariable ||
  //     !textVariable ||
  //     !textFormula
  //   ) {
  //     Swal.fire({
  //       title: "Error",
  //       text: "Completar los campos",
  //       icon: "error",
  //     });
  //     return;
  //   }

  //   if (selectPeriodo == "") {
  //     Swal.fire({
  //       title: "Error",
  //       text: "Seleccionar opción",
  //       icon: "error",
  //     });
  //     return;
  //   }

  //   const response = await createHaberes({
  //     nombrehab: textNombre,
  //     descripcionhab: textDescripcion,
  //     periodicidadhab: selectPeriodo,
  //     variablehab: textVariable,
  //     formulahab: textFormula,
  //   });

  //   setTextNombre("");
  //   setTextDescripcion("");
  //   setTextVariable("");
  //   setTextFormula("");
  //   setSelectPeriodo("");
  //   // Como hacer para que el select vuelva a su estado inicial

  //   Swal.fire({
  //     title: "Success",
  //     text: "Se grabo correctamente",
  //     icon: "success",
  //   });
  // };

  // return (
  //   <>
  //     <form onSubmit={handleFormSubmit}>
  //       <Card className="items-center justify-center bg-gray-50">
  //         <div className="w-full  text-white p-1 mt-3 mb-2">
  //           <h1 className="bg-red-700 font-semibold text-xl px-2">
  //             Registro de Haberes
  //           </h1>
  //           <Card className="border rounded shadow-lg mt-3 mb-3 text-xs ">
  //             <div className="flex flex-row items-center justify-end gap-3 mt-2 mb-2">
  //               <label htmlFor="">Código:</label>
  //               <label
  //                 htmlFor=""
  //                 className="bg-red-100 w-[20%] rounded border py-1 text-center font-bold"
  //               >
  //                 H-001
  //               </label>
  //             </div>

  //             <div className="flex flex-col items-left mx-1 mb-1">
  //               <TextField
  //                 label="Nombre:"
  //                 name="nombrehab"
  //                 value={textNombre}
  //                 onChange={handleInputChangeN}
  //               />

  //               <TextField
  //                 label="Descripción:"
  //                 name="descripcionhab"
  //                 value={textDescripcion}
  //                 onChange={handleInputChangeD}
  //               />
  //             </div>
  //             <div className="grid grid-cols-2 gap-5 mb-1 items-center">
  //               <div className="flex flex-col px-1">
  //                 <SelectOptions
  //                   titulo={"Periodo"}
  //                   onChange={handleSelectPeriodo}
  //                   arrayselect={periodicidad}
  //                 />
  //               </div>

  //               <TextField
  //                 label="Variable:"
  //                 name="variablehab"
  //                 value={textVariable}
  //                 onChange={handleInputChangeV}
  //               />
  //             </div>
  //             <div className="flex flex-col items-left mx-1 mb-3">
  //               <TextField
  //                 label="Formula:"
  //                 name="formulahab"
  //                 value={textFormula}
  //                 onChange={handleInputChangeF}
  //               />
  //             </div>
  //           </Card>
  //         </div>
  //         <div className="w-full flex items-center justify-right gap-4">
  //           <Button text="Grabar Haber" type="submit" />
  //           <Button text="Salir" type="button" />
  //         </div>
  //       </Card>
  //     </form>
  //   </>
  // );
}
