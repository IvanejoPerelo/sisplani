import {
  Button,
  Frame,
  Card,
  FormPla,
  SelectOptions,
  CardReportes,
  CardPlanilla,
} from "../../components";
import { useState, useEffect } from "react";
import { read } from "../../services";
import {
  BanknotesIcon,
  EllipsisVerticalIcon,
  DocumentTextIcon,
  DocumentIcon,
  LockClosedIcon,
} from "@heroicons/react/24/solid";

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
  { value: "dic", option: "Diciembre" },
];

const cardPlanillas = [
  { title: "Planilla de Empleados", status: "No Procesado" },
  { title: "Planilla de Empleados", status: "No Procesado" },
  { title: "Planilla de Empleados", status: "No Procesado" },
];

export default function Planillas() {
  const [selectMes, setSelectMes] = [""];
  const [planillas, setPlanillas] = useState([]);
  const [proceso, setProceso] = useState(false);

  const handleSelectMes = (e) => setSelectMes(e.target.value);

  const getPlanillas = async () => {
    const response = await read(false, "Planilla");
    setPlanillas(response);
  };

  useEffect(() => {
    getPlanillas();
  }, []);

  const handlePlanillaSubmit = async (e) => {
    e.preventDefault();

    await create(false, "planilla");
    if (values) {
      Swal.fire({
        title: "Success",
        text: "Se creó la Planilla Correctamente",
        icon: "success",
      });
      await getPlanillas();
    }
  };

  return (
    <>
      <Frame className={"w-full"}>
        <Card className={"mb-4"}>
          <div className="mb-3">
            <div className="w-full  text-white p-1 mt-3">
              <h1 className="bg-red-700 font-semibold text-xl px-2">
                Proceso de Planillas
              </h1>
            </div>
          </div>

          <SelectOptions
            titulo={"Mes de Planilla:"}
            onChange={handleSelectMes}
            arrayselect={meses}
            className={"flex w-[30%] text-lg font-semibold"}
          />
          <div className="w-full flex jusitfy-right gap-2 mt-3 p-2">
            <Button text="Procesar Planilla" type="button" />
            <Button text="Cerrar Planilla" type="button" />
            <Button text="Salir" type="button" />
          </div>

          <div className="grid grid-cols-3 gap-2 w-30 h-20 m-y-5">
            {
              cardPlanillas.map((cardPlanilla) => (
                <CardReportes
                titulo={cardPlanilla.title}
                estado={cardPlanilla.status}
              />
              ))}
          </div>

          {planillas.length > 0 &&
            planillas.map((planilla) => (
              <CardPlanilla
                mesLetra={`${planilla.mes} - ${planilla.anio}`}
                estado={planilla.estado}
              />
            ))}
        </Card>
      </Frame>
    </>
  );
}
