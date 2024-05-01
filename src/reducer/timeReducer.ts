import { Time } from "@/types/Time"

type addTime = {
    type: 'add',
    payload: {
        id: number,
        nome: string,
        instagram: number,
        twitter: number,
        facebook: number,
        youtube: number,
        tiktok: number,
        socios: number,
        url: string
    }
}

type editTime = {
    type: 'edit',
    payload: {
        id: number,
        nome: string,
        instagram: number,
        twitter: number,
        facebook: number,
        youtube: number,
        tiktok: number,
        socios: number,
        url: string
    }
}

type deleteTime = {
    type: 'delete',
    payload: { id: number }
}

type loadTime = {
    type: 'load',
    payload: Time[]
}

type ListActions = addTime | editTime | deleteTime | loadTime

export const timeReducer = (times: Time[], action: ListActions) => {
    switch (action.type) {
        case 'add':
            return [...times, {
                id: times.length,
                nome: action.payload.nome,
                instagram: action.payload.instagram,
                twitter: action.payload.twitter,
                facebook: action.payload.facebook,
                youtube: action.payload.youtube,
                tiktok: action.payload.tiktok,
                socios: action.payload.socios,
                url: action.payload.url
            }]

        case 'edit':
            return times.map(t => {
                if (t.id === action.payload.id) {
                    t.nome = action.payload.nome
                    t.instagram = action.payload.instagram
                    t.twitter = action.payload.twitter
                    t.facebook = action.payload.facebook
                    t.youtube = action.payload.youtube
                    t.tiktok = action.payload.tiktok
                    t.socios = action.payload.socios
                    t.url = action.payload.url
                }
                return t
            })
        case 'delete':
            return times.filter(t => t.id !== action.payload.id)

        case 'load':
            return action.payload
        default:
            return times
    }
}