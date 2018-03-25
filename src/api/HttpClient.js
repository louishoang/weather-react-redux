import axios from 'axios';

const get = (url) => {
  return axios(url)
}

export const HttpClient = {
  get
}