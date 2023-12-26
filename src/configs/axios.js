import axios from 'axios'
const {VITE_BASE_API_URL} = import.meta.env
axios.defaults.baseURL = VITE_BASE_API_URL + '/api'
axios.defaults.headers['Content-Type'] = 'application/json'

export default axios