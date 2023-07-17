import axios from 'axios'
import {socketUrl} from "@/api/config/config";
import {errorHandling} from "@/api/config/errorHandling";

const axiosIns = axios.create({
// You can add your headers here
  baseURL: socketUrl,
  headers: {
    'Cache-Control': 'no-cache',
    'Content-Type': 'application/json;charset=utf-8',
    Accept: '*/*',
  },
  params:{
    language:'fa-IR'
  }
})

// ℹ️ Add request interceptor to send the authorization header on each subsequent request after login
axiosIns.interceptors.request.use(config => {
  // show modal
  // document.querySelector('.v-application').classList.add('loading-indicator');
  let token = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMDg3ODY1Zjc5NWUyMzBmNDllOGM2MGE0NjBiN2I1ZiIsInN1YiI6IjY0YjBlYjA2YzJiY2M2MDEwNmI0NjQ2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QDwCgSWs76UwbbAnla9hnPz4SpXjZg4Ew5PpD0R458U";
  // If token is found
  if (token) {
    // Get request headers and if headers is undefined assign blank object
    config.headers = config.headers || {}
    // Set authorization header
    // ℹ️ JSON.parse will convert token to string
    config.headers.Authorization = token || ''
  }
  // Return modified config
  return config
})

// ℹ️ Add response interceptor to handle 401 response
axiosIns.interceptors.response.use(response => {
  // show modal
  // document.querySelector('.v-application').classList.remove('loading-indicator');
  return response
}, error => {
  // close modal
  // document.querySelector('.v-application').classList.remove('loading-indicator');
  // Handle error
  errorHandling(error)
})
export default axiosIns
