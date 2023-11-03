import { useState } from "react"
import { Dialog } from "@headlessui/react"
import { PencilIcon } from "@heroicons/react/24/solid"
import { updateEmp } from "../../services"
import Swal from "sweetalert2"
import SelectEmp from "../SelectEmp"

const regimen = ["Contratado", "Servicios", "Nombrado", "Permanente"]
const cargo = ["Asistente", "Sub-Gerente", "Administrador", "Gerente"]

export default function EditEmp({ empleado, getEmp }) {

    const [open, setOpen] = useState(false)

    const [regimenEmp, setRegimenEmp] = useState(regimen[0])
    const [cargoEmp, setCargoEmp] = useState(cargo[0])

    const [name, setName] = useState(empleado.nombres)
    const [dni, setDni] = useState(empleado.dni)

    const handleChangeName = (e) => setName(e.target.value)
    const handleChangeDni = (e) => setDni(e.target.value)

    const handleEditSubmit = async (e) => {
        e.preventDefault();
        await updateEmp(empleado.id, {
            name,
            dni,
            regimenEmp,
            cargoEmp,
        })
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
                className="relative z-50"
            >

                <div className="fixed inset-0 bg-black/30" />
                <div className="fixed inset-0 flex items-center  ">
                    <Dialog.Panel className="bg-white mx-auto w-full ml-20 md:max-w-md rounded p-4 ">

                        <Dialog.Title>Editar Datos de Empleado:  </Dialog.Title>
                        <form className="my-10" onSubmit={handleEditSubmit}>
                            <input
                                type="text"
                                name="nombres"
                                value={name}
                                onChange={handleChangeName}
                                placeholder="Editar Nombre"
                                className="border w-full px-2 py-3 rounded-l outline-none "
                            />
                            <input
                                type="text"
                                name="dni"
                                value={dni}
                                onChange={handleChangeDni}
                                placeholder="Editar DNI"
                                className="border w-full px-2 py-3 rounded-l outline-none "
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