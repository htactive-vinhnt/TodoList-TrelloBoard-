import { URL_API } from "../constants/apiConfig";
import axios from "axios";

export function callApi(endpoint, body) {
  return axios.post(`${URL_API}${endpoint}`, body);
}

export function addApi(endpoint, body) {
  return axios.post(`${URL_API}${endpoint}`, body);
}

export function getDataApi(endpoint) {
  return axios.get(`${URL_API}${endpoint}`);
}

export function deleteApi(endpoint, id) {
  return axios.delete(`${URL_API}${endpoint}/${id}`);
}

export function updateApi(endpoint, body) {
  return axios.put(`${URL_API}${endpoint}`, body);
}
