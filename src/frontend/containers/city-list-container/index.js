import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import s from './_styles.css'
import CityContainer from '../../containers/city-container'

class CityList extends Component {
    getCityWeather = () => {
        return this.props.weather.map((w) => {
            return (
                <div className={s.city} key={w.location.city} >
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

export default connect(mapStateToProps)(CityList)