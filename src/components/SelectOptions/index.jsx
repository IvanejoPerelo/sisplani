import { useState } from "react";

export default function SelectOptions({ titulo, onChange, arrayselect }) {


  return (
    <>
      <div className="flex flex-col items-left">
        <span>{titulo}</span>
        <select
          id="selectoptions"
          name="selectoptions"
          className="border border-red-200 text-gray-900 text-sm rounded focus:ring-red-500
           focus:border-red-500 block w-full p-0.5 dark:bg-red-700 dark:border-red-600 dark:placeholder-red-400
            dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
          onChange={onChange}
        >
          <option selected>Seleccione</option>
          {arrayselect.map((a) => {
            return (
              <option
                key={a.value}
                value={a.value}
              >
                {a.option}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
}
