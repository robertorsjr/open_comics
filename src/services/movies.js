import api,{endpoints} from './index'

export async function getMovies(limit){
    const { get } = await api
    return get(endpoints.movies(limit))
};
