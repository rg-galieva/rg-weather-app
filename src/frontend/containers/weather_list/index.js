import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import s from './_styles.css'
import CityContainer from '../../containers/city-container'
const i_cancel = require('./cancel-1.svg');

class WeatherList extends Component {
    getCityWeather = () => {
        return this.props.weather.map((w) => {
            return (
                <div className={s.city} key={w.location.city} >
                    <div dangerouslySetInnerHTML={{__html: i_cancel}} className={s.delete}></div>
                    <CityContainer weather={w}/>
                </div>
            )
        })
    };


    render() {
        return (
            <div className={s.city_list}>
                {this.getCityWeather()}
            </div>
        )
    }


    static propTypes = {
        weather: PropTypes.array.isRequired
    };
}

function mapStateToProps({weather}) {
    return {weather}
}

export default connect(mapStateToProps)(WeatherList)