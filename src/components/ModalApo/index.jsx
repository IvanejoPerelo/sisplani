import { Dialog } from "@headlessui/react";
import { FormApo } from "../../components";
import { useState } from "react";


export default function ModalApo({value, getApo}) {
  const [open, setOpen] = useState(false);

  return (
    <>
          <td className="px-4 py-4">
        <a
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer"
          onClick={() => {
            setOpen(true);
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
              <FormApo modify={true} value={value}/>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}
