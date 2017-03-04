import React, {PropTypes, Component} from 'react'
import City from '../../components/city'
import GooglePic from '../../components/google-pic'
import Chart from '../../components/chart'
import s from './_styles.css'

class CityContainer extends Component {

    parseData = (w) => {
        let c = {};
        c.city = w.location.city;
        c.country = w.location.country;
        c.moonrise = w.astronomy.sunrise;
        c.moonset = w.astronomy.sunset;
        c.date = w.item.pubDate;
        c.temp = w.item.condition.temp;
        c.text = w.item.condition.text;
        c.code = w.item.condition.code;
        return c;
    };

    getTempList = (w) => {
        let temp_list = w.item.forecast.map((fcast) => +fcast.high);
        return temp_list;
    }

    render() {
        let {weather} = this.props;
        let id = Math.random();
        let coords = {lat: +weather.item.lat, lng: +weather.item.long};

        return (
            <section className={s.city_wrap}>
                <GooglePic coords={coords}/>
                <City id={id} weather={this.parseData(weather)} forecast={weather.item.forecast}/>
                <Chart data={this.getTempList(weather)} color="#f7f7f7"/>
            </section>
        );
    }

    // static propTypes = {
    //     : PropTypes..isRequired
    // };

}

export default CityContainer;