import {
    LockClosedIcon
  } from "@heroicons/react/24/solid";

export default function CardPlanilla({mesLetra, estado}) {
  return (
    <>
      <div className="w-full flex mt-3 items-center border-t-2 border-b-2 border-gray-300">
        <LockClosedIcon className="w-8 p-1 m-1 border rounded text-white bg-gray-500" />
        <div className="flex flex-col p-0 m-0">
          <p className="text-lg font-semibold text-red-700">{mesLetra}</p>
          <span className="text-sm text-gray-500">{estado}</span>
        </div>
      </div>
    </>
  );
}
