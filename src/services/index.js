import axios from 'axios'
import { apiKey } from '../util/config'

const api = axios.create({ baseURL:`https://comicvine.gamespot.com/api` })


export const endpoints = {
    
    lastsComics:(limit)=>`/issues/?api_key=${apiKey}&format=json&sort=date_added:desc&limit=${limit}`,
    batman:`/issues/?api_key=${apiKey}&format=json&filter=name:batman&limit=10`,
    movies:(size) =>`/movies/?api_key=${apiKey}&format=json&sort=date_added:desc&limit=${size}`,
    movie:(limit) =>`/movies/?api_key=${apiKey}&format=json&sort=date_added:desc&limit=${limit}`
}

export default api;