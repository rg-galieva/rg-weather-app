import {combineReducers} from 'redux'
import ReducerWeather from './reducer_weather'

const rootReducer = combineReducers({
    state: (state= {}) => state,
    weather: ReducerWeather
})

export default rootReducer