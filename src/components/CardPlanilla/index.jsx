import { LockClosedIcon } from "@heroicons/react/24/solid";
import Button from "../Button";
import { update } from "../../services";

export default function CardPlanilla({ mes, anio, estado }) {
  const urlNumber = false;
  const url = "Planilla";
  return (
    <>
      <div className="w-full flex mt-3 items-center border-t-2 border-b-2 border-gray-300 gap-3">
        <div>
          <LockClosedIcon className="w-8 p-1 m-1 border rounded text-white bg-gray-500" />
        </div>
        <div>
          {/* <button 
            className = "border border-red-500 p-"
            onClick={() => console.log(mes)}>Cerrar Planilla</button> */}

          <Button
            text="Cerrar Planilla" 
            type="button"
            className = "p-2"
            // onclick={update(urlNumber,url)}
            // () => console.log(mes)
          />

{/* export async function update (urlNumber, id, body, url){
    return await makeHttpRequestURL({urlNumber, url, id, body, method: "PUT" })
} */}

        </div>
        <div className="flex flex-col p-0 m-0">
          <p className="text-lg font-semibold text-red-700">{`${mes} - ${anio}`}</p>
          <span className="text-sm text-gray-500">{estado}</span>
        </div>
      </div>
    </>
  );
}
