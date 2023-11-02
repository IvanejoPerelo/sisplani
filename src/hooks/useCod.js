import { useState, useEffect } from "react";
import { read } from "../services";

export function useCod(item, url, tipo) {
  const urlNumber = true;

  const [prefijo, setPrefijo] = useState("");

  const getCod = async () => {
    const response = await read(urlNumber, url);
    const cod = response.filter((buscarCod) => buscarCod.tipo == tipo);
    console.log("item + cod.length", item + cod.length);
    setPrefijo(item + cod.length);
  };

  useEffect(() => {
    getCod();
  }, []);

  return {
    prefijo,
    getCod,
  };
}
