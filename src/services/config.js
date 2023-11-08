const baseURL1 = "https://653e7c189e8bd3be29df5e3a.mockapi.io/" // items y afp
const baseURL2 = "https://653bc0c9d5d6790f5ec7611c.mockapi.io/" // empleado y planilla
let baseURL = baseURL1;



export async function makeHttpRequestURL({urlNumber, url, id, body, method = "GET"}){

  if (urlNumber) {
    baseURL = baseURL2
  } 
  
  const finalUrl = id ? `${url}/${id}`: url

  const response = await fetch(`${baseURL}${finalUrl}`, {
      method,
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
  
  });

  const data = await response.json();

  return data;

}


