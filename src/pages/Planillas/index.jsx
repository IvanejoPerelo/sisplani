import {
  Button,
  Frame,
  Card,
  FormPla,
  SelectOptions,
  CardReportes,
  CardPlanilla,
} from "../../components";
// import {meses} from "./meses"

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
            <CardReportes
              titulo={"Planillas de Empleados"}
              estado={"No Procesado"}
            />
            <CardReportes
              titulo={"Resumen de Planilla"}
              estado={"No Procesado"}
            />
            <CardReportes
              titulo={"Boletas de Pago PDF"}
              estado={"No Procesado"}
            />
          </div>

          <CardPlanilla mesLetra={"Setiembre 2023"} estado={"Cerrado"} />
          <CardPlanilla mesLetra={"Agosto 2023"} estado={"Cerrado"} />
          <CardPlanilla mesLetra={"Julio 2023"} estado={"Cerrado"} />
          <CardPlanilla mesLetra={"Junio 2023"} estado={"Cerrado"} />
        </Card>
      </Frame>
    </>
  );
}
