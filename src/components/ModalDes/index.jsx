import { TextField, Button } from "../../components";
import { useState, useEffect } from "react";
import { read } from "../../services";
import { EditDes } from "../../components"

export default function ModalDes(){

const urlNumber=true
const url= "items"

const [detailTable, setDetailTable] = useState([]);
const [textBusqueda, setTextBusqueda] = useState("");
const [global, setGlobal] = useState ([]);

const getTablaDes = async () => {
        const response = await read(urlNumber, url)
        setDetailTable(response)
        setGlobal(response)
    };

useEffect(() => {
    getTablaDes();
    }, []);

const filtrarItems = () =>{
    const filtrar = detailTable.filter((item) => item.nombre.toLowerCase().includes(textBusqueda.toLocaleLowerCase) )
    setTextBusqueda(filtrar)
}  

    useEffect(() => {
        filtrarItems()
    
    }, [textBusqueda]);


return(
        
        <div className="container m-auto mt-4 items-center justify-center max-w-[90%] ">
            <h1 className="bg-red-700 font-semibold text-xl px-2 text-white"> Registro de Trabajadores </h1>
            <form className=" justify-between">
                <div className="mt-2">
                    <table>
                        <thead>
                            <tr className="">
                                <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase ">NOMBRE</th>
                                <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase ">DESCRIPCION</th>
                                <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase ">TIPO DESCUENTO</th>
                                <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase ">ESTADO</th>
                                <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase ">ACCION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                global.map((item) =>(
                                    <tr key={item.id} >
                                        <td className="px-5 py-2 text-xs font-medium whitespace-nowrap">{item.nombre}</td>
                                        <td className="px-5 py-2 text-xs font-medium whitespace-nowrap">{item.descripcion}</td>
                                        <td className="px-5 py-2 text-xs font-medium whitespace-nowrap">{item.tipodes}</td>
                                        <td className="px-5 py-2 text-xs font-medium whitespace-nowrap">{item.estado}</td>
                                        <td className="px-3  text-center text-xs font-medium"><EditDes key={item.id} item={item} getTablaDes={getTablaDes} /></td>
                                    </tr> 
                                ))}
                        </tbody>
                    </table>
                                    
                </div>
                <div className="flex gap-3 items-center ">
                    
                    <Button
                        text="Listar Descuentos"
                        type = "submit"
                        className="max-w-[25%] mt-2"
                        variant = "primary"
                    />
                
                    
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg
                            className="w-5 h-5 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                        fill-rule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clip-rule="evenodd"
                        ></path>
                        </svg>
                    </div>
                    <TextField
                        type="text"
                        id="buscarEmp"
                        className="p-2 pl-10 text-sm text-justify text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50"
                        placeholder="Buscar Empleado"
                        value={textBusqueda}
                        onChange={(e) => setTextBusqueda (e.target.value)}
                        autocomplete="off"
                    />
                </div>
                


                </div>
            </form>
        </div>


        
    )}
    