import { FormDes } from "../../components";
import { useState } from "react";
import { Dialog } from "@headlessui/react";

export default function EditDes({ header, valuesDes }) {
  const [open, setOpen] = useState(false);
  const [rowSelect, setRowSelect] = useState(null);
  return (
    <>
      <table className="w-[70%] text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {header.map((head) => (
              <th scope="col" className="px-4 py-3">
                {head.title}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {valuesDes.map((value) => (
            <tr
              key={value.id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <th
                scope="row"
                className="px-4 py-4 font-medium text-gray-900  dark:text-white"
              >
                {value.nombre}
              </th>
              <td className="px-4 py-4 "> {value.descripcion}</td>
              <td className="px-4 py-4 "> {value.tipodes}</td>

              <td
                className={`${
                  value.estado === "A"
                    ? "text-blue-950 font-medium"
                    : "text-gray-500"
                } px-4 py-4`}
              >
                {value.estado === "A" ? "Activo" : "Inactivo"}
              </td>
              <td className="px-4 py-4">
                <a
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer"
                  onClick={() => {
                    setOpen(true);
                    setRowSelect(value);
                    console.log(value);
                  }}
                >
                  Editar
                </a>
              </td>
              <Dialog
                className={"relative z-50"}
                open={open}
                onClose={() => setOpen(false)}
              >
                <div className="fixed inset-0 bg-black/30" />
                <div className="fixed inset-0 flex items-center justify-center p-4">
                  <Dialog.Panel className="bg-white mx-auto  rounded p-4 ">
                    <div className="flex items-center justify-center">
                      <FormDes
                        title={"Modificación de Descuentos"}
                        valuesAfp={valuesDes}
                        modify={true}
                        rowselect={rowSelect}
                      />
                    </div>
                  </Dialog.Panel>
                </div>
              </Dialog>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
