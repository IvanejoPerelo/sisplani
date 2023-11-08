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
import { create, read } from "../../services";
// import {
//   BanknotesIcon,
//   EllipsisVerticalIcon,
//   DocumentTextIcon,
//   DocumentIcon,
//   LockClosedIcon,
// } from "@heroicons/react/24/solid";
// import Swal from "sweetalert2";

const meses = [
  { value: "Enero", option: "Enero" },
  { value: "Febrero", option: "Febrero" },
  { value: "Marzo", option: "Marzo" },
  { value: "Abril", option: "Abril" },
  { value: "Mayo", option: "Mayo" },
  { value: "Junio", option: "Junio" },
  { value: "Julio", option: "Julio" },
  { value: "Agosto", option: "Agosto" },
  { value: "Setiembre", option: "Setiembre" },
  { value: "Octubre", option: "Octubre" },
  { value: "Noviembre", option: "Noviembre" },
  { value: "Diciembre", option: "Diciembre" },
];

export default function Planillas() {
  const urlNumber = false;
  const url = "Planilla";
  const [selectMes, setSelectMes] = useState("");
  const [planillaFaltante, setPlanillaFaltante] = useState([]);
  const [planillaAvanzada, setPlanillaAvanzada] = useState([]);
  const [months, setMonths] = useState(meses);

  const [cardPlanillas, setCardPlanillas] = useState([
    { title: "Planilla de Empleados", status: "No Procesado" },
    { title: "Resumen de Planilla", status: "No Procesado" },
    { title: "Boletas de Empleados", status: "No Procesado" },
  ]);

  useEffect(() => {
    getPlanillas();
  }, []);

  const handleSelectMes = (e) => {
    setSelectMes(e.target.value);
    console.log(e.target.value);
  };

  const getPlanillas = async () => {
    const response = await read(urlNumber, "Planilla");
    const planillaAvanzada = response.filter(
      (mesF) => mesF.estado === "Abierto" || mesF.estado === "Cerrado"
    );
    const planillaMeses = planillaAvanzada.map((mesM) => mesM.mes);

    const mesesFiltrados = months.filter(
      (month) => !planillaMeses.includes(month.value)
    );

    setMonths(mesesFiltrados);

    setPlanillaAvanzada(planillaAvanzada);
    setPlanillaFaltante(
      response
        .filter((mesN) => mesN.estado === "Faltante")
        .map((mesN) => mesN.mes)
    );
  };

  const resultado = async () => {
    setCardPlanillas([
      { title: "Planilla de Empleados", status: "Procesado" },
      { title: "Resumen de Planilla", status: "Procesado" },
      { title: "Boletas de Empleados", status: "Procesado" },
    ]);

    const values = {
      anio: "2023",
      mes: selectMes,
      estado: "Abierto",
    };
    await create(urlNumber, values, url);
    await getPlanillas();
  };

  return (
    <>
      <Frame className={"w-full"}>
        <Card className={"mb-4"}>
          <div className="mb-3">
            <div className="w-full  text-white p-1 mt-3">
              <h1 className="bg-red-700 font-semibold text-xl px-2 text-center">
                Proceso de Planillas
              </h1>
            </div>
          </div>
          <div className="flex items-center">
             <div className={`w-1/5   `}>
                <SelectOptions
                   titulo={"Mes de Planilla:"}
                   onChange={handleSelectMes}
                   arrayselect={months}
                   className={"flex w-[30%] text-lg font-semibold"}
                />   
             </div>
              <div className={`gap-2 p-2 `}>
                  <Button
                  text="Procesar Planilla"
                  type="button"
                  onclick={resultado}   
                  className="w-[200px]"            
                  />
             </div>
          </div>

          <div className="grid grid-cols-3 gap-2 w-30 h-20 m-y-5">

            {cardPlanillas.length > 0 &&
              cardPlanillas.map((cardPlanilla) => (
                <CardReportes
                  key={cardPlanilla.title}
                  titulo={cardPlanilla.title}
                  estado={cardPlanilla.status}
                />
              ))}

          </div>

          {planillaAvanzada.length > 0 &&
            planillaAvanzada.map((mA) => (
              <CardPlanilla
                key={mA.id}
                mesLetra={`${mA.mes} - ${mA.anio}`}
                estado={mA.estado}
                id={mA.id}
                getPlanillas={getPlanillas}
              />
            ))}
        </Card>
      </Frame>
    </>
  );
}
