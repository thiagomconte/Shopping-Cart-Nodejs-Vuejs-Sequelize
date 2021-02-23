import axios from 'axios'
import store from '../store/index'

export const http = axios.create({
    baseURL: 'http://localhost:3000/api/',
    headers:{
        'Authorization': `Bearer ${store.state.auth.token}`
    }
})