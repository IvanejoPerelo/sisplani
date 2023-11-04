import { useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { SubMenu } from "..";
import {
  UserIcon,
  PlusIcon,
  MinusIcon,
  HandThumbUpIcon,
  BookOpenIcon,
  NewspaperIcon,
} from "@heroicons/react/24/solid";
import logoBlanco from "../../assets/logo3.png";
import { useSelector } from "react-redux";

export default function Layout() {
  const [open, setOpen] = useState(true);
  const [gotcha, setGotcha] = useState("");
  const user = useSelector((state) => state.user.data)

  if(!user) return <Navigate to="/" />

  const menus = [
    {
      title: "Empleados",
      src: <UserIcon className="w-5" />,
      submenu: [{ title: "Nuevo Empleado" }, { title: "Modificar Empleado" }],
    },
    {
      title: "Haberes",
      src: <PlusIcon className="w-5" />,
      submenu: [{ title: "Nuevo Haber" }, { title: "Modificar Haber" }],
    },
    {
      title: "Descuentos",
      src: <MinusIcon className="w-5" />,
      submenu: [],
    },
    {
      title: "Aportaciones",
      src: <HandThumbUpIcon className="w-5" />,
      submenu: [],
    },
    {
      title: "Procesos",
      src: <BookOpenIcon className="w-5" />,
      submenu: [],
    },
    {
      title: "Reportes",
      src: <NewspaperIcon className="w-5" />,
      submenu: [],
    },
  ];

  const Submenu = (property) => {};

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
            {menus.map((menu) => (
              <SubMenu menu={menu} open={open} />
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
