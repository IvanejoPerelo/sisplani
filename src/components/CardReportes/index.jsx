import {
    DocumentTextIcon,
    EllipsisVerticalIcon,
  } from "@heroicons/react/24/solid";

export default function CardReportes({ titulo, estado }) {
  return (
    <>
      <div className="flex items-center justify-between border bg-gray-50 rounded mt-2 h-16 shadow-lg">
        <div className="flex items-center text-black">
          <DocumentTextIcon className="ml-2 h-14 text-white hover:text-red-700 p-3 border border-red-700 rounded-full bg-red-700 hover:bg-white" />
          <div className="ml-2">
            <p className="text-xl font-semibold">{titulo}</p>
            <span>{estado}</span>
          </div>
        </div>
        <EllipsisVerticalIcon className="h-12 text-black p-3" />
      </div>
    </>
  );
}
