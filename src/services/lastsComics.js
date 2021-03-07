import api,{endpoints} from './index'


export async function getLastsComics(limit){
    const { get } = await api
    return get(endpoints.lastsComics(limit))
};
