import { makeHttpRequestURL } from "./config"; // false = empleado y planilla
                                               // true =  items y afp

const URLApiEmp = "https://653e7c189e8bd3be29df5e3a.mockapi.io/empleados";


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

// Listar Trabajador
// Funciones CRUD Empleados 

export async function createEmp(body){
    const response = await fetch(URLApiEmp, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body),
    })
    const data = await response.json()
    return data
  }
  
  export async function readEmp(){
    const response = await fetch (URLApiEmp)
    const data = await response.json()
    return data;
  }
  
  export async function updateEmp(id, body){
    const response = await fetch(`${URLApiEmp}/${id}`, {
        headers: {"Content-Type": "application/json"},
        method: "PUT",
        body: JSON.stringify(body),
    })
    const data = await response.json()
    return data 
  }
  