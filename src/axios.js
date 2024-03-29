import axios from 'axios'

const instance = axios.create({
    baseURL: process.env.VUE_APP_SERVER_URL,
    timeout: 300000,
    headers: {'Content-Type': 'application/json'}
  });

  export default instance