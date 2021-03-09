import api,{endpoints} from './index'

export async function getLastsComics(limit){
    const { get } = await api
    return get(endpoints.lastsComics(limit))
};

export async function getLastComic(){
    const { get } = await api
    return get(endpoints.lastComic)
};

