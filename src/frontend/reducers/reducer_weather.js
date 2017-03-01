import {FETCH_WEATHER} from '../constants'

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER :
            return [action.payload.data.query.results.channel, ...state];
            break;
    }

    return state
}