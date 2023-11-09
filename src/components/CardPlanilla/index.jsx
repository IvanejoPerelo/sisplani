import { LockClosedIcon, LockOpenIcon } from "@heroicons/react/24/solid";
import Button from "../Button";
import { update } from "../../services";
import { useState } from "react";

export default function CardPlanilla({ mesLetra, estado, id, getPlanillas }) {
  const urlNumber = false;
  const url = "Planilla";

  return (
    <>
      <div className="w-full flex mt-3 items-center border-t-2 border-b-2 border-gray-300 gap-3">
        <div>
          <Button
            text="Cerrar Planilla"
            className={"p-2"}
            onclick={async () => {
              await update(urlNumber, id, { estado: "Cerrado" }, url);
              await getPlanillas();
            }}
          />
        </div>
        <div>
          {estado === "Abierto" ? (
            <LockOpenIcon className="w-8 p-1 m-1 border rounded text-white bg-green-700" />
          ) : (
            <LockClosedIcon className="w-8 p-1 m-1 border rounded text-white bg-red-700" />
          )}
        </div>
        <div className="flex flex-col p-0 m-0">
          <p className="text-lg font-semibold text-red-700">{mesLetra}</p>
          <span className="text-sm text-gray-500">{estado}</span>
        </div>
      </div>
    </>
  );
}
