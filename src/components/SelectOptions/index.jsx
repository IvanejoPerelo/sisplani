export default function SelectOptions({
  titulo,
  onChange,
  arrayselect,
  nameSelected,
  disabled,
  valueSelected,
}) {
  return (
    <>
      <div className="flex flex-col items-left">
        <span>{titulo}</span>
        <select
          id="selectoptions"
          name={nameSelected}
          value={valueSelected}
          className="border border-red-200 text-gray-900 text-sm rounded focus:ring-red-500
           focus:border-red-500 block w-full p-0.5 dark:bg-red-700 dark:border-red-600 dark:placeholder-red-400
            dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
          onChange={onChange}
          disabled={disabled}
        >
          <option value="DEFAULT" selected disabled>
            Seleccione opción
          </option>
          {arrayselect.map((a) => (
            <option key={a.option} value={a.value}>
              {a.option}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
