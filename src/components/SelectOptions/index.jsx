import { useState } from "react";

export default function SelectOptions(title, onChange, arraySelect) {

  const [selects, setSelects] = useState("");

  return (
    <>
      <div className="flex flex-col items-left">
        <label htmlFor="">{title}</label>
        <select
          id="regimenLaboral"
          class=" bg- border border-red-200 text-gray-900 text-xs rounded focus:ring-red-500 focus:border-red-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
          onChange={onChange}
        >
          <option selected>Seleccione</option>
          {arraySelect.map((arraySelect) => (
            <option value={arraySelect.value}>{arraySelect.option}</option>
          ))}
        </select>
      </div>
    </>
  );
}
