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
    headers: 
        ...headers,
        'Content-Type': contentType,
    },
    url: url,
    data: data,
  });
};


export const getMaterials = () => request('get', '/materials');
export const getMaterial = (id) => request('get', `/materials/${id}`);
export const createMaterial = (material) => request('post', '/materials', material);
export const updateImageMaterial = (id, image) => request('post', `/materials/${id}/image`, image, 'multipart/form-data');
export const updateMaterial = (id, material) => request('put', `/materials/${id}`, material);
export const deleteMaterial = (id) => request('delete', `/materials/${id}`);