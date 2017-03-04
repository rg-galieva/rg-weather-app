import React, {PropTypes} from 'react'
import s from './_styles.css'
import Moment from 'moment'

function City(props) {
    let {city, country, moonrise, moonset, date, temp, text, code} = props.weather;

    const parseDate = (date) => {
        let str = date.split();
        let date_parsed = str.slice(0, str.length - 3);
        return Moment(date_parsed).format('dddd, D MMM YYYY');
    };
    const date_formatted = parseDate(date);

    const forecast = props.forecast.slice(1, 8).map((day) => {
        return (
            <div className={s.w_list_item} key={day.day}>
                <span className={s.w_list_item_day}>{day.day}</span>
                <i className={['wi', `wi-yahoo-${day.code}`].join(' ')}></i>
                <span className={s.w_list_item_temp}>{day.high}</span>
                <span className={s.w_list_item_temp}>{day.low}</span>
            </div>
        )
    });

    return (
        <div className={s.city_inner}>
            <div className={s.desc}>
                <h1>{city}</h1>
                <p>{country}</p>
                <p dateTime={date_formatted}>{date_formatted}</p>
            </div>

            <div className={[s.w_info, s.set_act].join(' ')}>
                <figure className={s.w_code}>
                    <i className={['wi', `wi-yahoo-${code}`].join(' ')}></i>
                    <figcaption>{text}</figcaption>
                </figure>

                <div className={s.w_temp_range}>
                    <figure>
                        <i className="wi wi-moonrise"></i>
                        <figcaption>{moonrise}</figcaption>
                    </figure>
                </div>
                <div className={s.w_temp_range}>
                    <figure>
                        <i className="wi wi-moonset"></i>
                        <figcaption>{moonset}</figcaption>
                    </figure>
                </div>

                <div className={s.temp_now}>
                    <span>{temp}°</span>
                </div>
            </div>

            <div className={s.w_list}>
                {forecast}
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
        moonrise: PropTypes.string,
        moonset: PropTypes.string,
        date: PropTypes.date,
        temp: PropTypes.string,
        text: PropTypes.string,
        code: PropTypes.string
    }),
    id: PropTypes.number.isRequired,
    forecast: PropTypes.array
};

export default City;