import { Button, TextField, FormEmp } from "../../components"
import { useState, useEffect } from "react"
import { read } from "../../services"
import EditEmp from "../../components/EditEmp"

export default function FormListEmp(){

    const urlNumber=false 
    const url= "empleados"

    // const [search, setSearch] = useState("")
    // const [filterEmp, setFilterEmp] = useState([])

    const [emp, setEmp] = useState([])
    const getEmp = async () => {
        const response = await read(urlNumber, url);
        setEmp(response);
    }


    useEffect( ()=> {
        getEmp();
    }, [])
    
    // const buscarEmp = emp.filter((item) =>
    //     item.nombres.toLowerCase().includes(search.toLocaleLowerCase())
    // )

    return(
        
        <div className="container m-auto mt-4 items-center justify-center max-w-[90%] ">
            <h1 className="bg-red-700 font-semibold text-xl px-2 text-white"> Registro de Trabajadores </h1>
            <form className=" justify-between">
                <div className="mt-2">
                    <table>
                        <thead>
                            <tr className="">
                                <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase ">DNI</th>
                                <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase ">NOMBRES</th>
                                <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase ">APELLIDO P.</th>
                                <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase ">APELLIDO M.</th>
                                <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase ">CARGO</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                emp.length>0 && emp.map((empleado) =>(
                                    <tr key={emp.id} >
                                            <td className="px-5 py-2 text-xs font-medium whitespace-nowrap">{empleado.dni}</td>
                                            <td className="px-5 py-2 text-xs font-medium whitespace-nowrap">{empleado.nombres}</td>
                                            <td className="px-5 py-2 text-xs font-medium whitespace-nowrap">{empleado.apellido_p}</td>
                                            <td className="px-5 py-2 text-xs font-medium whitespace-nowrap">{empleado.apellido_m}</td>
                                            <td className="px-5 py-2 text-xs font-medium whitespace-nowrap">{empleado.cargo}</td>
                                            <td><EditEmp key={empleado.id} empleado={empleado} getEmp={getEmp} /></td>
                                    </tr>
                                    
                                
                                ))}
                        </tbody>
                    </table>
                                    
                </div>
                <div className="flex gap-3">
                    
                    <Button
                        text="Listar Trabajador"
                        type = "submit"
                        className="max-w-[25%]"
                        variant = "primary"
                    />
                    <Button 
                        text="Buscar Trabajador"
                        type = "button"
                        className="max-w-[25%]"
                        variant = "primary"
                        
                        
                    />
                    <TextField
                    className="max-w-[90%] outline-none border border-white py-1 text-black "
                    type="text"
                    placeholder="Buscar Trabajador"
                    name="BuscarT"
                    
                    />
                </div>
            </form>
        </div>


        
        
        
        
    )
   
   
   
}