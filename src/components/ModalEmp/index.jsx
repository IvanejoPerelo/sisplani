import { FormEmp } from "../../components";
import { Dialog } from "@headlessui/react";
import { useState } from "react";

export default function ModalEmp({value, getEmp}) {
    const [rowSelect, setRowSelect] = useState(null);
    const [open, setOpen] = useState(false);

    return (
        <>
            <td className="px-4 py-4">
                <a
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer"
                    onClick={() => {
                        setOpen(true);
                        console.log(arraySelect);
                        setRowSelect(arraySelect);
                        console.log(rowSelect);
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
              <FormEmp modify={true} value={value}/>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
        </>
    );

}