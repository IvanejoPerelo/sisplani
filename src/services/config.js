// const URLApiAfp = "https://653bc0c9d5d6790f5ec7611c.mockapi.io/afp";

// const URLApiHaberes = "https://653bc0c9d5d6790f5ec7611c.mockapi.io/haberes";

// const URLApiDescuentos = "https://653bc0c9d5d6790f5ec7611c.mockapi.io/descuentos";

const baseURL1 = "https://653e7c189e8bd3be29df5e3a.mockapi.io/" // empleado y planilla
const baseURL2 = "https://653bc0c9d5d6790f5ec7611c.mockapi.io/" // items y afp
let baseURL = ""

export async function makeHttpRequestURL1({urlNumber, url, id, body, method = "GET"}){

  if (urlNumber) {
    baseURL = baseURL2
  } else {
    baseURL = baseURL1
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

// export async function makeHttpRequestURL2({url, id, body, method = "GET"}){
//   const finalUrl = id ? `${url}/${id}`: url

//   const response = await fetch(`${baseURL2}${finalUrl}`, {
//       method,
//       headers: {
//           "Content-Type": "application/json",
//       },
//       body: JSON.stringify(body),
  
//   });

//   const data = await response.json();

//   return data;
// }


// export async function createAfp(body) {
//   const response = await fetch(URLApiAfp, {
//     method: "POST",
//     headers: {
//       "content-type": "application/json",
//     },
//     body: JSON.stringify(body),
//   });

//   const data = await response.json();

//   return data;
// }

// export async function createHaberes(body) {
//   const response = await fetch(URLApiHaberes, {
//     method: "POST",
//     headers: {
//       "content-type": "application/json",
//     },
//     body: JSON.stringify(body),
//   });

//   const data = await response.json();

//   return data;
// }


// export async function createDescuentos(body) {
//   const response = await fetch(URLApiDescuentos, {
//     method: "POST",
//     headers: {
//       "content-type": "application/json",
//     },
//     body: JSON.stringify(body),
//   });

//   const data = await response.json();

//   return data;
// }