import axios from 'axios'
import { apiKey } from '../util/config'

const api = axios.create({ baseURL:`https://comicvine.gamespot.com/api` })

export const endpoints = {
    lastComic:`/issues/?api_key=${apiKey}&format=json&sort=date_added:desc&limit=1`,
    lastsComics:(limit)=>`/issues/?api_key=${apiKey}&format=json&sort=date_added:desc&limit=${limit}`,
    filter:(limit, comics) =>`/issues/?api_key=${apiKey}&format=json&filter=name:${comics}&limit=${limit}`,
    movies:(size) =>`/movies/?api_key=${apiKey}&format=json&sort=date_added:desc&limit=${size}`,
    movie:(limit) =>`/movies/?api_key=${apiKey}&format=json&sort=date_added:desc&limit=${limit}`
}

export default api;