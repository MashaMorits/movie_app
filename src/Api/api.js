import axios from 'axios'

const api = axios.create({
    baseURL: 'https://kinopoiskapiunofficial.tech/api/',
    headers: {
        'X-API-KEY': '1e69d574-cb0e-42ba-ae2b-a8644817561a',
        'Content-Type': 'application/json',
    }
})

export default api