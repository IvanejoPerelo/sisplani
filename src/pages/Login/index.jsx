import { Frame, FormLogin } from "../../components";
import { inputs } from "./form";
import { useForm } from "../../hooks/useForm"
import ImportLogin from "../../assets/logoLogin.png";
// import { read } from "../../services"

export default function Login () {
  const { values, errors, handleInputChange, validateIfValuesHasEmpty} = useForm({
    user: "",
    password: "",
  })

  const handleFormSubmit = (e) =>{
    e.preventDefault()
    if(!validateIfValuesHasEmpty()) return
    console.log("funciona?")
    // const users = await read("users")
  }

    return (
      <>
        <Frame wmiddle={"w-full xl:w-2/5"}>
          <div className="w-full lg:w-1/2 flex flex-col text-black items-center justify-center bg-[url('/../../src/assets/planillas.jpg')] bg-no-repeat bg-center bg-cover">
            <h1 className="text-4xl font-bold text-red-700">Welcome</h1>
          </div>

          <div className="w-full lg:w-1/2 px-16 py-12">
            <img
              className="w-1/2 h-auto mt-6 rounded-l-lg mb-4 m-auto"
              src={ImportLogin}
              alt=""
            />
            <h2 className="text-3xl mb-4">Bienvenidos al Sistema</h2>
            <p className="mb-4">Por favor Ingrese sus Datos</p>
            <FormLogin
              inputs={inputs}
              errors={errors}
              handleFormSubmit={handleFormSubmit}
              handleInputChange={handleInputChange}
              textButton="Iniciar Sesion"
              values={values}
            />
          </div>
        </Frame>
      </>
  );

}
