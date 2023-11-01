import { useState, useEffect } from "react";
import { read } from "../services";

export function useCod(item){
    const urlNumber = true

    const [cod, setCod] = useState([])
    const prefijo =`${item}${cod.length}`

    const getCod = async () => {
        const response = await read(urlNumber,"items")
        return (response)
    }

    useEffect(() => {
        getCod()
        .then(data => {
        setCod(data)
        console.log(data.length)
        })
    }, [])

    return{
        prefijo
    }
}

