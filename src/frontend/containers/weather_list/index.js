import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import s from './_styles.css'
import City from '../../components/city'

const i_cancel = require('./cancel-1.svg');

class WeatherList extends Component {

    parseData = (w) => {
        let c = {};
        c.city = w.location.city;
        c.country = w.location.country;
        c.region = w.location.region;
        c.wind = w.wind.speed;
        c.humidity = w.atmosphere.humidity;
        c.sunrise = w.astronomy.sunrise;
        c.sunset = w.astronomy.sunset;
        c.date = w.item.pubDate;
        c.temp = w.item.condition.temp;
        c.text = w.item.condition.text;

        return c;
    };

    getCityWeather = () => {
        return this.props.weather.map((w) => {
            let id = Math.random();
            return (
                <div className={s.city} key={id} >
                    <div dangerouslySetInnerHTML={{__html: i_cancel}} className={s.delete}></div>
                    <City id={id} weather={this.parseData(w)}/>
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