import { FormApo } from "../../components";
import { useState } from "react";
import { Dialog } from "@headlessui/react";

export default function ModalApo({valuesMa, modify}) {
  const [open, setOpen] = useState(false);
  const [rowSelect, setRowSelect] = useState(null);

  return (
    <>
      <td className="px-4 py-4">
        <img
          className="w-8 ml-2 cursor-pointer"
          src="./src/assets/modificar.png"
          onClick={() => {
            setOpen(true);
            setRowSelect(value);
            console.log(value);
          }}
        />
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
              <FormApo title={"Modificación de Aportaciones"} modify={modify} select={rowSelect}/>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}
