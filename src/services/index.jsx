import { makeHttpRequestURL } from "./config"; // false = empleado y planilla
                                               // true =  items y afp

export async function create (urlNumber, body, url){ 
    return await makeHttpRequestURL({urlNumber, url, body, method: "POST" })
}

export async function read (urlNumber, url){
    return await makeHttpRequestURL({ urlNumber, url })
}

export async function update (id, body, url){
    return await makeHttpRequestURL({urlNumber, url, id, body, method: "PUT" })
}

export async function destroy(id, url){
    return await makeHttpRequestURL({urlNumber, id, url, method: "DELETE" })
}