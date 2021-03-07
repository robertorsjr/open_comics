import api,{endpoints} from './index'


export async function getBatman(){
    const { get } = await api
    return get(endpoints.batman)
}