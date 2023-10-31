import { Button, TextField } from "../../components"

export default function FormLogin({
    handleFormSubmit, 
    inputs,
    values, 
    handleInputChange, 
    errors,
    textButton,
    }){
    return (
        <form onSubmit={handleFormSubmit}>
              {inputs.map((input)=>(
                <div key={input.name} className="mb-4">
                  <TextField 
                    label={input.label} 
                    name={input.name} 
                    value={values[input.name]}
                    placeholder={input.placeholder}
                    onChange={handleInputChange}
                    type={input.type ?? "text"}
                  />
                  <span className="text-red-500 mt-1 text-xs">
                    {errors[input.name]}
                  </span>
                </div>
              ))}
              
              {/* <div className="mt-1 flex items-center">
              <TextField  type="checkbox" name="conectado" placeholder="Mantenerse Conectado" className={"focus:ring-red-700"}/>
              <span className="mt-3 ml-2">Mantenerse Conectado</span>
              </div> */}

              <div className="mt-7">
                <Button 
                  text={textButton}              
                  type="submit"
                />
              </div>
        </form>
    )
}