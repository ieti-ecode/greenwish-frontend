import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080/api/v1";

export const getAuthToken = () => window.localStorage.getItem("token");
export const getIdUser = () => window.localStorage.getItem("id");

export const setAuthToken = (token) =>
  window.localStorage.setItem("token", token);
export const setIdUser = (id) =>
  window.localStorage.setItem("id", id);

export const request = async (method, url, data, contentType = 'application/json') => {
  let headers = {};
  if (getAuthToken() !== null && getAuthToken() !== 'undefined') {
    headers = { Authorization: `Bearer ${getAuthToken()}` };
  }
  return axios({
    method: method,
    headers: {
      ... headers,
      'Content-Type': contentType,
    },
    url: url,
    data: data,
  });
};
