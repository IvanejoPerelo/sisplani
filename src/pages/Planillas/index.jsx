import { Button, Frame, Card, FormPla, SelectOptions } from "../../components";
import {
  BanknotesIcon,
  EllipsisVerticalIcon,
  DocumentTextIcon,
  DocumentIcon,
  LockClosedIcon,
} from "@heroicons/react/24/solid";

export default function Planillas() {
  const [selectMes, setSelectMes] = [""];

  const meses = [
    { value: "ene", option: "Enero" },
    { value: "feb", option: "Febrero" },
    { value: "mar", option: "Marzo" },
    { value: "abr", option: "Abril" },
    { value: "may", option: "Mayo" },
    { value: "jun", option: "Junio" },
    { value: "jul", option: "Julio" },
    { value: "ago", option: "Agosto" },
    { value: "set", option: "Setiembre" },
    { value: "oct", option: "Octubre" },
    { value: "nov", option: "Noviembre" },
    { value: "dic", option: "Dic" },
  ];

  const handleSelectMes = (e) => setSelectMes(e.target.value);

  return (
    <>
      <Frame className={"w-full"}>
        <Card className={"mb-4"}>
          <div className="mb-3">
            <div className="w-full  text-white p-1 mt-3">
              <h1 className="bg-red-700 font-semibold text-xl px-2">
                Calculo de Planillas
              </h1>
            </div>
          </div>

          <SelectOptions
            titulo={"Mes de Planilla:"}
            onChange={handleSelectMes}
            arrayselect={meses}
            className={"flex w-[30%]"}
          />
          <div className="w-full flex jusitfy-right gap-2 mt-3 p-2">
            <Button text="Procesar Planilla" type="button" />
            <Button text="Cerrar Planilla" type="button" />
            <Button text="Salir" type="button" />
          </div>
          <div className="grid grid-cols-3 gap-2 w-30 h-20 m-y-5">
            <div className="flex items-center justify-between border bg-gray-50 rounded mt-2 h-16 shadow-lg">
              <div className="flex items-center text-black">
                <BanknotesIcon className="ml-2 h-14 text-white hover:text-red-700 p-3 border border-red-700 rounded-full bg-red-700 hover:bg-white" />
                <div className="ml-2">
                  <p className="text-xl font-semibold">
                    Planillas de Empleados
                  </p>
                  <span> No Procesado</span>
                </div>
              </div>
              <EllipsisVerticalIcon className="h-12 text-black p-3" />
            </div>
            <div className="flex items-center justify-between border bg-gray-50 rounded mt-2 h-16 shadow-lg">
              <div className="flex items-center text-black">
                <BanknotesIcon className="ml-2 h-14 text-white hover:text-red-700 p-3 border border-red-700 rounded-full bg-red-700 hover:bg-white" />
                <div className="ml-2">
                  <p className="text-xl font-semibold">Resumen de Planilla</p>
                  <span> No Procesado</span>
                </div>
              </div>
              <EllipsisVerticalIcon className="h-12 text-black p-3" />
            </div>
            <div className="flex items-center justify-between border bg-gray-50 rounded mt-2 h-16 shadow-lg">
              <div className="flex items-center text-black">
                <DocumentTextIcon className="ml-2 h-14 text-white hover:text-red-700 p-3 border border-red-700 rounded-full bg-red-700 hover:bg-white" />
                <div className="ml-2">
                  <p className="text-xl font-semibold">Boletas de Pago PDF</p>
                  <span> No Procesado</span>
                </div>
              </div>
              <EllipsisVerticalIcon className="h-12 text-black p-3" />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 w-30 h-20 m-y-5">
            <div className="flex items-center justify-between border bg-gray-50 rounded mt-2 h-16 shadow-lg">
              <div className="flex items-center text-black">
                <DocumentTextIcon className="ml-2 h-14 text-white hover:text-red-700 p-3 border border-red-700 rounded-full bg-red-700 hover:bg-white" />
                <div className="ml-2">
                  <p className="text-xl font-semibold">Planillas AFP NET</p>
                  <span> No Procesado</span>
                </div>
              </div>
              <EllipsisVerticalIcon className="h-12 text-black p-3" />
            </div>
            <div className="flex items-center justify-between border bg-gray-50 rounded mt-2 h-16 shadow-lg">
              <div className="flex items-center text-black">
                <DocumentTextIcon className="ml-2 h-14 text-white hover:text-red-700 p-3 border border-red-700 rounded-full bg-red-700 hover:bg-white" />
                <div className="ml-2">
                  <p className="text-xl font-semibold">Planillas PLAME</p>
                  <span> No Procesado</span>
                </div>
              </div>
              <EllipsisVerticalIcon className="h-12 text-black p-3" />
            </div>
            <div className="flex items-center justify-between border bg-gray-50 rounded mt-2 h-16 shadow-lg">
              <div className="flex items-center text-black">
                <DocumentIcon className="ml-2 h-14 text-white hover:text-red-700 p-3 border border-red-700 rounded-full bg-red-700 hover:bg-white" />
                <div className="ml-2">
                  <p className="text-xl font-semibold">
                    Listado Aportaciones
                  </p>
                  <span> No Procesado</span>
                </div>
              </div>
              <EllipsisVerticalIcon className="h-12 text-black p-3" />
            </div>
          </div>
          <div className="w-full flex mt-3 items-center border-t-2 border-b-2 border-gray-300">
            <LockClosedIcon className="w-8 p-1 m-1 border rounded text-white bg-gray-500" />
            <div className="flex flex-col p-0 m-0">
              <p className="text-lg font-semibold text-red-700">
                Setiembre 2023
              </p>
              <span className="text-sm text-gray-500"> Cerrado</span>
            </div>
          </div>
          <div className="w-full flex mt-3 items-center border-t-2 border-b-2 border-gray-300">
            <LockClosedIcon className="w-8 p-1 m-1 border rounded text-white bg-gray-500" />
            <div className="flex flex-col p-0 m-0">
              <p className="text-lg font-semibold text-red-700">
                Agosto 2023
              </p>
              <span className="text-sm text-gray-500"> Cerrado</span>
            </div>
          </div>
          <div className="w-full flex mt-3 items-center border-t-2 border-b-2 border-gray-300">
            <LockClosedIcon className="w-8 p-1 m-1 border rounded text-white bg-gray-500" />
            <div className="flex flex-col p-0 m-0">
              <p className="text-lg font-semibold text-red-700">
                Julio 2023
              </p>
              <span className="text-sm text-gray-500"> Cerrado</span>
            </div>
          </div>
        </Card>
      </Frame>
    </>
  );
}
