import { useState } from "react"
import { Dialog } from "@headlessui/react"
import { update } from "../../services"
import Swal from "sweetalert2"
import TextField from "../TextField"
import { PencilIcon } from "@heroicons/react/24/solid"

export default function EditDes({ item, getTablaDes }) {

const urlNumber=false
const url = "items"

const [open, setOpen] = useState(false)

const [nombre, setNombre] = useState(item.nombre)
const [descripcion, setDescripcion] = useState(item.descripcion)
const [tipodes, setTipoDes] = useState(item.tipodes)
const [estado, setEstado] = useState(item.estado)

    const handleChangeNombre = (e) => setNombre(e.target.value)
    const handleChangeDescripcion = (e) => setDescripcion(e.target.value)
    const handleChangeTipoDes = (e) => setTipoDes(e.target.value)
    const handleChangeEstado = (e) => setEstado(e.target.value)

    const handleEditSubmitDes = async (e) => {
      e.preventDefault();
      await update(urlNumber, item.id, {
          nombre,
          descripcion,
          tipodes,
          estado,
          
      }, url)
      Swal.fire({
          title: "Success",
          icon: "success",
          text: "Se actualizo correctamente"
      })
      setOpen(false)
      await getTablaDes()

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
        <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel className="bg-white mx-auto  rounded p-4 ">
                <Dialog.Title>Editar Descuentos:  </Dialog.Title>
                    <form className="my-10" onSubmit={handleEditSubmitDes}>
                        <TextField
                            type="text"
                            name="nombre"
                            label= "Nombre"
                            value={nombre}
                            onChange={handleChangeNombre}
                            className="rounded text-justify "
                        />

                        <TextField
                            type="text"
                            label="Descripcion"
                            value={descripcion}
                            onChange={handleChangeDescripcion}
                            className="rounded text-justify "
                        />
                        
                        <TextField
                            type="text"
                            label="Tipo Descuento"
                            value={tipodes}
                            onChange={handleChangeTipoDes}
                            className="rounded text-justify"
                        />

                        <TextField
                            type="text"
                            name="dni"
                            label="Estado"
                            value={estado}
                                onChange={handleChangeEstado}
                            className="border rounded text-justify outline-none "
                        />

                        <div className="mt-5">
                            <button
                                type="submit"
                                className="bg-red-700 shadow-sm text-white text-bold text-sm outline-none py-1 px-3 mt-3  ">
                                Editar Descuentos
                            </button>
                        </div>
                    </form>
                </Dialog.Panel>
            </div>
                </Dialog>
          </>
          );
       }
    






















//   return (
//     <>

//       <table className="w-[70%] text-sm text-left text-gray-500 dark:text-gray-400">
//         <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//           <tr>
//             {header.map((head) => (
//               <th scope="col" className="px-4 py-3">
//                 {head.title}
//               </th>
//             ))}
//           </tr>
//         </thead>

//         <tbody>
//           {valuesDes.map((value) => (
//             <tr
//               key={value.id}
//               className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
//             >
//               <th
//                 scope="row"
//                 className="px-4 py-4 font-medium text-gray-900  dark:text-white"
//               >
//                 {value.nombre}
//               </th>
//               <td className="px-4 py-4 "> {value.descripcion}</td>
//               <td className="px-4 py-4 "> {value.tipodes}</td>

//               <td
//                 className={`${
//                   value.estado === "A"
//                     ? "text-blue-950 font-medium"
//                     : "text-gray-500"
//                 } px-4 py-4`}
//               >
//                 {value.estado === "A" ? "Activo" : "Inactivo"}
//               </td>
//               <td className="px-4 py-4">
//                 <img
//                   className="w-8 ml-2 cursor-pointer"
//                   src="./src/assets/modificar.png"
//                   onClick={() => {
//                     setOpen(true)
//                     setRowSelect(value)
//                     //console.log(value);
//                   }}
//                 />
//               </td>
//               <ModalDes valuesMd={valuesDes} openModal={open} openModalF={setOpenFalse} getTablaDes={getTablaDes} />
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </>
//   );
// }
