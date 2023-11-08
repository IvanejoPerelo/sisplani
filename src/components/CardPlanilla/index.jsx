import { LockClosedIcon } from "@heroicons/react/24/solid";
import Button from "../Button";

export default function CardPlanilla({ mesLetra, estado, id }) {
  return (
    <>
      <div className="w-full flex mt-3 items-center border-t-2 border-b-2 border-gray-300 gap-3">
      <div>
          {/* <button onClick={() => console.log(mesLetra)}>por cada uno</button> */}
          <Button
           text = "Cerrar Planilla"
           className={"p-2"}
           onclick={() => console.log(mesLetra)}
          />
        </div>
        <div>
          <LockClosedIcon className="w-8 p-1 m-1 border rounded text-white bg-gray-500" />
        </div>
            {/* onclick={() => update(urlNumber,id,{estado:"Cerrado"}, url)} */}
        <div className="flex flex-col p-0 m-0">
          <p className="text-lg font-semibold text-red-700">{mesLetra}</p>
          <span className="text-sm text-gray-500">{estado}</span>
        </div>
        
      </div>
    </>
  );
}
