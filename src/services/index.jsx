import { makeHttpRequestURL1 } from "./config"; // empleado y planilla
// import { makeHttpRequestURL2 } from "./config"; // items y afp

export async function create (urlNumber, body, url){ 
    return await makeHttpRequestURL1({urlNumber, url, body, method: "POST" })
}

export async function read (urlNumber, url){
    return await makeHttpRequestURL1({ urlNumber, url })
}

export async function update (id, body, url){
    return await makeHttpRequestURL1({urlNumber, url, id, body, method: "PUT" })
}

export async function destroy(id, url){
    return await makeHttpRequestURL1({urlNumber, id, url, method: "DELETE" })
}

//----------------------------------------------------------------------

// export async function createURL2 (body, url){ 
//     return await makeHttpRequestURL2({url, body, method: "POST" })
// }

// export async function readURL2 (url){
//     return await makeHttpRequestURL2({ url })
// }

// export async function updateURL2 (id, body, url){
//     return await makeHttpRequestURL2({ url, id, body, method: "PUT" })
// }

// export async function destroyURL2(id, url){
//     return await makeHttpRequestURL2({ id, url, method: "DELETE" })
// }