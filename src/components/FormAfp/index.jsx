import { Button, TextField } from "../../components"

export default function FormAfp() {
  const [textNombre, setTextNombre] = useState("");
  const [textAporte, setTextAporte] = useState("0.00");
  const [textSeguros, setTextSeguros] = useState("0.00");
  const [textComision, setTextComision] = useState("0.00");
  const [textMaxAsegurable, setTextMaxAsegurable] = useState("0.00");

  const handleInputChangeN = (e) => setTextNombre(e.target.value);

  const handleInputChangeA = (e) => setTextAporte(e.target.value);

  const handleInputChangeS = (e) => setTextSeguros(e.target.value);

  const handleInputChangeC = (e) => setTextComision(e.target.value);

  const handleInputChangeM = (e) => setTextMaxAsegurable(e.target.value);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!textNombre) {
      Swal.fire({
        title: "Error",
        text: "Completa el campo de nombre",
        icon: "error",
      });
      return;
    }

    if (
      textAporte == 0.0 ||
      textSeguros == 0.0 ||
      textComision == 0.0 ||
      textMaxAsegurable == 0.0
    ) {
      Swal.fire({
        title: "Error",
        text: "Los campos deben tener un valor mayor que cero",
        icon: "error",
      });
      return;
    }

    // const response = await createAfp({
    //   nombre: textNombre,
    //   aporte: textAporte,
    //   seguros: textSeguros,
    //   comision: textComision,
    //   maxasegurable: textMaxAsegurable,
    // });
    
    const urlNumber = true

    await create ("2",{  
      name: textNombre,
      aporte: textAporte,
      seguros: textSeguros,
      comision: textComision,
      maxremaseg: textMaxAsegurable,
     },
     "afp"
     );

    setTextNombre("");
    setTextAporte("0.00");
    setTextSeguros("0.00");
    setTextComision("0.00");
    setTextMaxAsegurable("0.00");

    Swal.fire({
      title: "Success",
      text: "Se grabo correctamente",
      icon: "success",
    });

  };

export default function FormAfp({
  handleFormSubmit, 
    inputs,
    values, 
    handleInputChange, 
    errors,
}) {
  return (
    <form onSubmit={handleFormSubmit}>
          {inputs.map((input)=>(
            <div key={input.name}>
              <TextField 
                label={input.label} 
                name={input.name} 
                value={values[input.name]}
                onChange={handleInputChange}
                type={input.type ?? "text"}
              />
              <span className="text-red-500 mt-1 text-sm">
                {errors[input.name]}
              </span>
            </div>
          ))}
          
          {/* <div className="mt-1 flex items-center">
          <TextField  type="checkbox" name="conectado" placeholder="Mantenerse Conectado" className={"focus:ring-red-700"}/>
          <span className="mt-3 ml-2">Mantenerse Conectado</span>
          </div> */}

    </form>
)
}