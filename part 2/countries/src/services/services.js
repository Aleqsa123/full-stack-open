import axios from 'axios';
const baseUrl = `https://studies.cs.helsinki.fi/restcountries/api/all`;

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const getWeath = (capital) => {
  const request = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=407bccd56fb60db3c94f81fadb9d2711&units=metric`)
  return request.then(response => response.data)
}

const create = newObject => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

const services = { getAll, create, update, getWeath };

export default services;