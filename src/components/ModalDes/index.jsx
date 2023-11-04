import { FormDes } from "../../components";
import { useState } from "react";
import { Dialog } from "@headlessui/react";


export default function ModalDes ({valuesMd, modify}) {
    const [open, setOpen] = useState(false);
    const [rowSelect, setRowSelect] = useState(null);
        
    return (
       <>
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
                        modify={true} select={rowSelect}
                      />
                    </div>
                  </Dialog.Panel>
                </div>
              </Dialog>
       </> 
    );
}