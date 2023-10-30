import { Button, TextField } from "../../components"


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