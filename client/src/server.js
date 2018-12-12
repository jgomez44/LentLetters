import axios from "axios";

export function address_getAll() {
  return axios
    .get("/api/addresses")
    .then(resp => resp.data)
    .catch(error => console.error("error===", error));
}

// export async function address_getAll_async() {
//   const resp = await axios.get("/api/addresses");
//   return resp.data;
// }
//make promise callback code read like normal code
