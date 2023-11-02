import { Outlet } from "react-router-dom";
import {
  UserIcon,
  PlusIcon,
  MinusIcon,
  HandThumbUpIcon,
  BookOpenIcon,
  NewspaperIcon,
} from "@heroicons/react/24/solid";
import logoBlanco from "../../assets/logo3.png";
import { useState } from "react";

export default function Layout() {
  const [open, setOpen] = useState(true);
  const [openSM, setOpenSM] = useState(false); //abrir y cerrar
  const [properties, setPropierties] = useState("");

  const menus = [
    {
      title: "Empleados",
      src: <UserIcon className="w-5" />,
      tipo: "M",
      property: "E",
    },
    {
      title: "Nuevo Empleado",
      src: <UserIcon className="w-5 ml-5" />,
      tipo: "SM",
      property: "E",
    },
    {
      title: "Modificar Empleado",
      src: <UserIcon className="w-5 ml-5" />,
      tipo: "SM",
      property: "E",
    },
    {
      title: "Haberes",
      src: <PlusIcon className="w-5" />,
      tipo: "M",
      property: "H",
    },
    {
      title: "Nuevo Haber",
      src: <UserIcon className="w-5 ml-5" />,
      tipo: "SM",
      property: "H",
    },
    {
      title: "Modificar Haber",
      src: <UserIcon className="w-5 ml-5" />,
      tipo: "SM",
      property: "H",
    },
    {
      title: "Descuentos",
      src: <MinusIcon className="w-5" />,
      tipo: "M",
    },
    {
      title: "Aportaciones",
      src: <HandThumbUpIcon className="w-5" />,
      tipo: "M",
    },
    {
      title: "Procesos",
      src: <BookOpenIcon className="w-5" />,
      tipo: "M",
    },
    {
      title: "Reportes",
      src: <NewspaperIcon className="w-5" />,
      tipo: "M",
    },
  ];
  const actualizacion = (value) => {
    () => setOpenSM(!openSM);
    () => setPropierties(value);
  };

  return (
    <div className="flex">
      <div
        className={`${
          open ? "w-72" : "w-20"
        } duration-300 p-5 pt-8 h-screen bg-red-700 relative border-black`}
      >
        <img
          src="./src/assets/control.png"
          className={`absolute cursor-pointer rounded-full -right-3 top-9 w-7 border-2 border-red-700 ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />
        <div>
          <img
            src={`${
              open ? "./src/assets/logo3.png" : "./src/assets/logo3short.png"
            }`}
            className={"cursor-pointer duration-500"}
          />
        </div>
        <div className="flex flex-col">
          <ul className="pt-6">
            {menus.map((menu, index) => (
              <li
                key={index}
                className={`${
                  menu.tipo == "M"
                    ? "text-lg block"
                    : menu.property == "H" && openSM
                    ? "text-sm block"
                    : "hidden"
                } text-white flex gap-x-4 cursor-pointer p-2 hover:bg-black rounded-md font-semibold`}
                
                onClick={()=>setOpenSM(!openSM)}
              >
                {menu.src}
                <span
                  className={`${!open && "hidden"} origin-left duration-200`}
                >
                  {menu.title}
                </span>
              </li>
            ))}
          </ul>

          <div className="flex gap-3 items-center hover:bg-black rounded-md font-semibold p-2">
            <img src="./src/assets/logout.png" className="w-5 h-5 ml-1" />
            <span
              className={`${
                !open && "hidden"
              } origin-left duration-200 text-white text-lg cursor-pointer`}
            >
              Cerrar Sesion
            </span>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="p-5 text-2xl font-semibold w-full h-20 bg-red-700 border-black">
          <div className="flex items-center justify-end gap-10">
            <img
              src="./src/assets/configuracion.png"
              className="w-7 font-bold"
            />
            <div className="flex items-center justify-center gap-5">
              <img
                src="./src/assets/administrator.png"
                className="w-7 rounded-full border"
              />
              <div className="flex flex-col text-xs text-white font-bold">
                <span>Ivan Pérez</span>
                <span>ADMINISTRATOR</span>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <Outlet />
        </div>
      </div>
    </div>
  );
}