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
  const [planillas, setPlanillas] = useState([]);
  const [selectFilter, setSelectFilter] = useState([]);
  const [proceso, setProceso] = useState(false);
  const [estadoPlanilla, setEstadoPlanilla] = useState([])

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

  const handleMeses = async (e) =>{
    const response = await read(false, "Planilla");
    setPlanillas(response);
  }

  const getPlanillas = async () => {
    const response = await read(false, "Planilla");
    setPlanillas(response);
    setSelectFilter(response.filter((item) => item.mes === selectMes));
    // console.log(planillas) //muestras que ya están cargadas     
  };
  
  const resultado = async() => {
    setCardPlanillas([
      { title: "Planilla de Empleados", status: "Procesado" },
      { title: "Resumen de Planilla", status: "Procesado" },
      { title: "Boletas de Empleados", status: "Procesado" },
    ]);
   
    const values =
      {
        anio: "2023",
        mes: selectMes,
        estado: "Abierto",
      }
    await create(false,values,"Planilla")
    
    await getPlanillas()
  };

  //  const cerrarPlanillas = console.log(resultado)
  
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
            <Button
              text="Procesar Planilla"
              type="button"
              onclick={resultado}
            />
            <Button 
              text="Cerrar Planilla" 
              type="button" 
              onclick={handleMeses}
            />
            <Button text="Salir" type="button" />
          </div>

          <div className="grid grid-cols-3 gap-2 w-30 h-20 m-y-5">
            {cardPlanillas.map((cardPlanilla) => (
              <CardReportes
                key={cardPlanilla.title}
                titulo={cardPlanilla.title}
                estado={cardPlanilla.status}
                // onclick={cerrarPlanillas}
              />
            ))}
          </div>

          {planillas.length > 0 &&
            planillas.map((planilla) => (
              <CardPlanilla
                key={planilla.mes}
                mesLetra={`${planilla.mes} - ${planilla.anio}`}
                estado={planilla.estado}
              />
            ))}
        </Card>
      </Frame>
    </>
  );
}
