import { useState } from "react"
import { Dialog } from "@headlessui/react"
import { PencilIcon } from "@heroicons/react/24/solid"
import { update } from "../../services"
import Swal from "sweetalert2"
import SelectEmp from "../SelectEmp"
import TextField from "../TextField"

const regimen = ["Contratado", "Servicios", "Nombrado", "Permanente"]
const cargo = ["Asistente", "Sub-Gerente", "Administrador", "Gerente"]

export default function EditEmp({ empleado, getEmp }) {

    
    const urlNumber=false 
    const url= "empleados"
    
    const [open, setOpen] = useState(false)

    const [regimenEmp, setRegimenEmp] = useState(regimen[0])
    const [cargoEmp, setCargoEmp] = useState(cargo[0])

    const [nombres, setNombres] = useState(empleado.nombres)
    const [apellido_p, setApellido_p] = useState(empleado.apellido_p)
    const [apellido_m, setApellido_m] = useState(empleado.apellido_m)
    const [dni, setDni] = useState(empleado.dni)

    const handleChangeNombres = (e) => setNombres(e.target.value)
    const handleChangeApellido_p = (e) => setApellido_p(e.target.value)
    const handleChangeApellido_m = (e) => setApellido_m(e.target.value)
    const handleChangeDni = (e) => setDni(e.target.value)
    
    const handleEditSubmit = async (e) => {
        e.preventDefault();
        await update(urlNumber, empleado.id, {
            nombres,
            apellido_p,
            apellido_m,
            dni,
            regimenEmp,
            cargoEmp,
        }, url)
        Swal.fire({
            title: "Success",
            icon: "success",
            text: "Se actualizo correctamente"
        })
        setOpen(false)
        await getEmp()

    }



    return (
        <>
            <PencilIcon
                className="h-6 w-6 text-blue-500 cursor-pointer "
                onClick={() => setOpen(true)}
            />
            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                className="relative z-50 "
            >

                <div className="fixed inset-0 bg-black/30" />
                <div className="fixed inset-0 flex items-center justify-center">
                    <Dialog.Panel className="bg-white mx-auto w-full ml-20 md:max-w-[40%] position: absolute m-auto rounded p-4">

                        <Dialog.Title>Editar Datos de Empleado:  </Dialog.Title>
                        <form className="my-10" onSubmit={handleEditSubmit}>
                            <TextField
                                type="text"
                                name="nombres"
                                label= "Nombres"
                                value={nombres}
                                onChange={handleChangeNombres}
                                className="rounded text-justify "
                            />
                            <div className="flex gap-3">
                            
                            <TextField
                                type="text"
                                label="Apellidos"
                                value={apellido_p}
                                onChange={handleChangeApellido_p}
                                className="rounded text-justify "

                            />
                            <TextField
                                type="text"
                                value={apellido_m}
                                onChange={handleChangeApellido_m}
                                className="rounded text-justify mt-5"

                            />
                            </div>
                            <TextField
                                type="text"
                                name="dni"
                                label="DNI"
                                value={dni}
                                onChange={handleChangeDni}
                                className="border rounded text-justify outline-none "
                            />
                            <div className="mt-5">
                                <SelectEmp
                                    value={regimenEmp}
                                    onChange={setRegimenEmp}
                                    items={regimen}
                                />
                            </div>
                            <div className="mt-5">
                                <SelectEmp
                                    value={cargoEmp}
                                    onChange={setCargoEmp}
                                    items={cargo}
                                />
                            </div>

                            <div className="mt-5">
                                <button
                                    type="submit"
                                    className="bg-red-700 shadow-sm text-white text-bold text-sm outline-none py-1 px-3 mt-3  ">
                                    Editar Trabajador
                                </button>
                            </div>
                        </form>
                    </Dialog.Panel>
                </div>


            </Dialog>

        </>
    )
}