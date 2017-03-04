import {combineReducers} from 'redux'
import ReducerWeather from './reducer_weather'

const rootReducer = combineReducers({
    weather: ReducerWeather
})

export default rootReducer