import api,{endpoints} from './index'

export async function getMovies(size){
    const { get } = await api
    return get(endpoints.movies(size))
};

export async function getMovie(limit){
    const { get } = await api
    return get(endpoints.movie(limit))
};

