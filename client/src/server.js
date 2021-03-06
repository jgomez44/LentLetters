import axios from "axios";

export function address_getAll() {
  return axios
    .get("/api/addresses")
    .then(resp => resp.data)
    .catch(error => console.error("error===", error));
}

export function getGames() {
  return axios
    .get("/api/addresses/games")
    .then(resp => resp.data)
    .catch(error => console.error("get games error===", error));
}

export function addNewPerson(personInfo) {
  return axios.post("/api/addresses", personInfo);
}

export function deletePersonInfo(id) {
  return axios.delete("/api/addresses/" + id);
}

export function selectPersonInfoById(id) {
  return axios.get("/api/addresses/" + id).then(resp => {
    return resp.data;
  });
}

export function updatePerson(id, personInfo) {
  return axios.put("/api/addresses/" + id, personInfo);
}