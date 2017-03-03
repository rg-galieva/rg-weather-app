import React, {PropTypes} from 'react'
import s from './_styles.css'

const i_stats = require('./stats.svg');

function City(props) {
    let {city, country, region, wind, humidity, sunrise, sunset, date, temp, text} = props.weather;

    return (
        <div className={s.city}>
            <h1>{city}</h1>

            <div className={s.desc}>
                <p>{country}</p>
                <p>{region}</p>
            </div>
        </div>
    );
}

City.propTypes = {
    weather: PropTypes.shape({
        city: PropTypes.string,
        country: PropTypes.string,
        region: PropTypes.string,
        wind: PropTypes.string,
        humidity: PropTypes.string,
        sunrise: PropTypes.string,
        sunset: PropTypes.string,
        date: PropTypes.date,
        temp: PropTypes.string,
        text: PropTypes.string
    }),
    id: PropTypes.number.isRequired
};

export default City;

