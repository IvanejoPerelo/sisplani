import { Button, TextField } from "../../components";
import { useState, useEffect } from "react";
import { read } from "../../services";
import EditEmp from "../../components/EditEmp";

export default function FormListEmp() {
  const urlNumber = false;
  const url = "empleados";

  const [emp, setEmp] = useState([]);
  const [textsearch, setTextSearch] = useState("");
  const [filterEmp, setFilterEmp] = useState([]);

  const getEmp = async () => {
    const response = await read(urlNumber, url);
    if (response === "Not found") return;//para evitar que se rompa

    setEmp(response);
    setFilterEmp(response);
  };

  //   const filtrarEmp = () => {
  //     const filtrar = emp.filter((empleados) =>
  //       empleados.nombres
  //         .toLocaleLowerCase()
  //         .includes(textsearch.toLocaleLowerCase)
  //     );
  //     setFilterEmp(filtrar);
  //   };

  useEffect(() => {
    getEmp();
  }, []);

  // useEffect(() =>{
  //     filtrarEmp();

  // }, [textsearch] )

  return (
    <div className="container m-auto mt-4 items-center justify-center max-w-[90%] ">
      <h1 className="bg-red-700 font-semibold text-xl px-2 text-white">
        {" "}
        Registro de Trabajadores{" "}
      </h1>
      <form className=" justify-between">
        <div className="mt-2">
          <table>
            <thead>
              <tr className="">
                <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase ">
                  DNI
                </th>
                <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase ">
                  NOMBRES
                </th>
                <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase ">
                  APELLIDO P.
                </th>
                <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase ">
                  APELLIDO M.
                </th>
                <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase ">
                  CARGO
                </th>
                <th className="px-5 py-3 text-xs font-medium text-gray-500 uppercase"></th>
              </tr>
            </thead>
            <tbody>
              {filterEmp.length > 0 &&
                filterEmp?.map((empleado) => (
                  <tr key={empleado.id}>
                    <td className="px-5 py-2 text-xs font-medium whitespace-nowrap">
                      {empleado.dni}
                    </td>
                    <td className="px-5 py-2 text-xs font-medium whitespace-nowrap">
                      {empleado.nombres}
                    </td>
                    <td className="px-5 py-2 text-xs font-medium whitespace-nowrap">
                      {empleado.apellido_p}
                    </td>
                    <td className="px-5 py-2 text-xs font-medium whitespace-nowrap">
                      {empleado.apellido_m}
                    </td>
                    <td className="px-5 py-2 text-xs font-medium whitespace-nowrap">
                      {empleado.cargo}
                    </td>
                    <td className="px-3  text-center text-xs font-medium">
                      <EditEmp
                        key={empleado.id}
                        empleado={empleado}
                        getEmp={getEmp}
                      />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

        <div className="flex gap-3 items-center ">
          <Button
            text="Listar Trabajador"
            type="submit"
            className="max-w-[25%] mt-2"
            variant="primary"
          />
        </div>

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
          <TextField
            type="text"
            id="buscarEmp"
            className="p-2 pl-10 text-sm text-justify text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50"
            placeholder="Buscar Empleado"
            value={textsearch}
            onChange={(e) => setTextSearch(e.target.value)}
            autocomplete="off"
          />
        </div>
      </form>
    </div>
  );
}
