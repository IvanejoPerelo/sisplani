import { useState, useEffect } from "react";
import { read } from "../services";

export function useCod(item, url, tipo){
    const urlNumber = true

    const [cod, setCod] = useState([])
    const prefijo =`${item}${cod.length+1}`

    const getCod = async () => {
        const response = await read(urlNumber, url)
        return (response)
    }
    useEffect(() => {
        getCod()
        .then(data => {
        setCod(data.filter((buscarCod)=> buscarCod.tipo==tipo))
        })
    }, [])

    return{
        prefijo
    }
}

