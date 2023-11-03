import { FormLogin, Card } from "../../components"
import { inputs } from "./form";
import { useForm } from "../../hooks/useForm"
import { create } from "../../services";
import { useCod } from "../../hooks/useCod";
import Swal from "sweetalert2";

export default function FormAfp({title, valuesAfp, modify, rowSelect}) {
  const urlNumber = true
  const item = "AFP"
  const url = "afp"
  const {prefijo} = useCod (item,url)


  const { values, errors, handleInputChange, validateIfValuesHasEmpty} = useForm({
    nombre: "",
    aporte: "",
    seguros:"",
    comision:"",
    maxremaseg:"",
  })

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if(!validateIfValuesHasEmpty()) return

    await create(urlNumber,values,"afp")
    if(values){
      Swal.fire({
        title: "Success",
        text: "Se creó la tarea correctamente",
        icon: "success"
       })
      return;
    }
  };

  return (
    <>
      <Card className="items-center justify-center bg-gray-50">
        <div className="w-full  text-white p-1 mt-3 mb-2">
          <h1 className="bg-red-700 font-semibold text-xl px-2">
            {title}
          </h1>
        </div>
        <Card className="border rounded shadow-lg mt-3 mb-3 text-xs ">
          <span className="text-right">{ prefijo }</span>
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
      </Card>
    </>
  );
}