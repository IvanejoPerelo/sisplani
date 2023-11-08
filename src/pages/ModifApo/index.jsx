import { Card, Frame, ModalApo } from "../../components";
import { read } from "../../services";
import { useState, useEffect } from "react";
import {
  PlusIcon,
} from "@heroicons/react/24/solid";

export default function ModifApo() {
  const header = [
    { title: "" },
    { title: "Nombre" },
    { title: "Descripción" },
    { title: "Porcentaje (%)" },
    { title: "Estado" },
    { title: "Accion" },
  ];
  const urlNumber = true;
  const url = "items";
  const [detailTable, setDetailTable] = useState([]);
  const [textBusqueda, setTextBusqueda] = useState("");

  const handleInputChangeSearch = (e) => {
    setTextBusqueda(e.target.value);
  };

  const getApo = async () => {
    const response = await read(urlNumber, url);
    const result = response.filter((apo) => apo.tipo === "A");
    setDetailTable(result);
  };

  const filterSearch = async () => {
    const response = await read(urlNumber, url);
    const result = response.filter((apo) => apo.tipo === "A");
    const filter = result.filter(
      (row) =>
        row.nombre.toLowerCase().includes(textBusqueda.toLowerCase()) ||
        row.descripcion.toLowerCase().includes(textBusqueda.toLowerCase())
    );

    setDetailTable(filter);
  };

  useEffect(() => {
    getApo();
  }, []);

  useEffect(() => {
    filterSearch();
  }, [textBusqueda]);

  return (
    <>
      <Frame wmiddle={"w-[800px]"}>
        <Card className={"mb-4"} key="card-apo">
          <div className="mb-3">
            <div className="w-full  text-gray p-1 mt-3">
              <h1 className="bg-gray-700 text-white text-center font-semibold text-xl px-2">
                Listado de Aportaciones
              </h1>
            </div>
          </div>

          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <div className="flex items-center justify-left pb-4">
              <span className="pr-3" for="table-search">
                Búsqueda de Aportaciones:
              </span>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  type="text"
                  id="table-search"
                  className="block p-2 text-center pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="busqueda"
                  value={textBusqueda}
                  onChange={handleInputChangeSearch}
                />
              </div>
            </div>
            <div>
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-red-700 dark:text-white">
                  <tr>
                    {header.map((head) => (
                      <th scope="col" className="px-4 py-3" key={head.title}>
                        {head.title}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {detailTable.map((value) => (
                    <tr
                      key={value.id}
                      className="bg-white border-b dark:bg-white dark:border-gray-700 text-gray-700 hover:bg-white dark:hover:bg-gray-200"
                    >
                      <td className="px-4 py-4 ">Aqui</td>
                      <th
                        scope="row"
                        className="px-4 py-4 font-medium text-gray-900 dark:gray-700"
                      >
                        {value.nombre}
                      </th>
                      <td className="px-4 py-4 "> {value.descripcion}</td>
                      <td className="px-4 py-4 "> {value.porcentajeapo}</td>

                      <td
                        className={`${
                          value.estado === "A"
                            ? "text-blue-950 font-medium"
                            : "text-gray-500"
                        } px-4 py-4`}
                      >
                        {value.estado === "A" ? "Activo" : "Inactivo"}
                      </td>
                      <ModalApo value={value} getApo={getApo} />
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Card>
      </Frame>
    </>
  );
}
