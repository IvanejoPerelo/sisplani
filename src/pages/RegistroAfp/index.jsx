import { Button, Card, Frame,  FormAfp } from "../../components";
import { nombre_afp, inputs_afp } from "./Form";
import { useForm } from "../../hooks/useForm";
import ImportLogin from "../../assets/logoLogin.png";

export default function RegistroAfp() {
  const { values, errors, handleInputChange, validateIfValuesHasEmpty } =
    useForm({
      nombre: "",
      aporte: "",
      seguros: "",
      comision: "",
      remumax: "",
    });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validateIfValuesHasEmpty()) return;
    console.log("funciona?");
    // const users = await read("users")
  };

  return (
    <>
      <Frame className="w-1/3">
        <form onSubmit={handleFormSubmit}>
          <Card className="items-center justify-center bg-gray-50">
            <div className="w-full  text-white p-1 mt-3 mb-2">
              <h1 className="bg-red-700 font-semibold text-xl px-2">
                Registro de AFP
              </h1>
              <Card className="border rounded shadow-lg mt-3 mb-3 text-xs ">
                <div className="flex flex-row items-center justify-end gap-3 mb-2 mt-2">
                  <span>Código:</span>
                  <span className="bg-red-100 w-[20%] rounded border py-1 text-center font-bold">
                    AFP-001
                  </span>
                </div>

                <div className="flex flex-col items-left mx-1 mb-1">
                  <FormAfp
                    inputs={nombre_afp}
                    errors={errors}
                    handleFormSubmit={handleFormSubmit}
                    handleInputChange={handleInputChange}
                    values={values}
                  />
                </div>

                <div className="grid grid-cols-2 items-center justify-center gap-5 mx-1 mb-2 items-center">
                  <FormAfp
                    inputs={inputs_afp}
                    errors={errors}
                    handleFormSubmit={handleFormSubmit}
                    handleInputChange={handleInputChange}
                    values={values}
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
      </Frame>
    </>
  );
}
