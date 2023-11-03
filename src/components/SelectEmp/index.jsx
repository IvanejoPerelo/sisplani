import { Listbox, Transition } from "@headlessui/react"
import { Fragment } from "react"
import { ChevronUpDownIcon } from "@heroicons/react/24/solid"

export default function SelectEmp({value, onChange, items}){

    return(
        <>
            <Listbox value= {value} onChange={onChange}>
                            <div className="relative"> 
                                <Listbox.Button className="w-full flex items-center justify-between border px-3 shadow-md py-3 rounded text-left">
                                    <span>{value} </span>
                                    <span><ChevronUpDownIcon className="h-5 w-5" /></span>
                                    
                                </Listbox.Button>
                                <Transition 
                                    as={Fragment} 
                                    leave="transition ease-out duration-500" 
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                > 
                                <Listbox.Options className="mt-1 rounded absolute z-10 w-full">
                                    {items.map((item)=>(
                                        <Listbox.Option 
                                            key={item} 
                                            value={item}
                                            className={ `py-2 px-3 hover:bg-red-200 hover: text-red-800 cursor-pointer ${item === value ? "bg-red-200":"bg-white" } first:rounded-t last:rounded-b `}
                                        >
                                        {item}
                                        </Listbox.Option>
                                
                                    ) )}                                     
                                </Listbox.Options>
                                </Transition>
                            </div>
            </Listbox>

        </>
    )
}
