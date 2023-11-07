import { useState } from "react";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";

export default function SubMenu({ menu, open }) {
  const [openSM, setOpenSM] = useState(false);

  return (
    <>
      <ul className="text-sm">
        <li
          className={`text-white flex flex-col gap-x-4 cursor-pointer p-2 hover:bg-red-500 rounded-md font-semibold`}
          onClick={() => setOpenSM(!openSM)}
        >
          <div className="flex items-center gap-4 text-lg">
            <span>{menu.src}</span>
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              {menu.title}
            </span>
          </div>
          {menu.submenu.length > 0 && (
            <ul className={`${openSM ? "block" : "hidden"}`}>
              {menu.submenu.map((item, index) => (
                <li className={`ml-9 py-1 hover:bg-red-700 rounded`} key={index}>
                  {/* {item.title} {item.ruta} */}
                  <Link to={item.ruta}>{item.title}</Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      </ul>
    </>
  );
}
