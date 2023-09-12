import axios from 'axios';
const baseUrl = `https://studies.cs.helsinki.fi/restcountries/api/all`;

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const getWeath = (capital) => {
  const API_KEY = process.env.REACT_APP_API_KEY
  const request = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${API_KEY}&units=metric`)
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