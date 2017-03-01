import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import City from '../../components/city'

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
            return <City key={id} id={id} weather={this.parseData(w)}/>
        })
    };


    render() {
        return (
            <div>
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