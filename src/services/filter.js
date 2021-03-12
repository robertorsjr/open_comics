import api,{endpoints} from './index'

export async function getFilter(limit , comics ){
    const { get } = await api
    return get(endpoints.filter(limit,comics))
}