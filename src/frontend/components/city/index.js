import React, {PropTypes} from 'react'
import s from './_styles.css'

const i_cancel = require('./cancel-1.svg');
const i_stats = require('./stats.svg');

function City(props) {
    let {city, country, region, wind, humidity, sunrise, sunset, date, temp, text} = props.weather;

    return (
        <section className={s.city_wrap}>
            <div className={s.city}>
                <h1>{city}</h1>

                <div className={s.desc}>
                    <p>{country}</p>
                    <p>{region}</p>
                </div>
            </div>

            <div className={s.icons}>
                <div dangerouslySetInnerHTML={{__html: i_cancel}} className={s.icon}></div>
                <div dangerouslySetInnerHTML={{__html: i_stats}} className={s.icon}></div>
            </div>
        </section>
    );
}

City.propTypes = {
    weather: PropTypes.shape({
        id: PropTypes.number.isRequired,
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
    })
};

export default City;

