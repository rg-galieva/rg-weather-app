import React from 'react'
import {Link} from 'react-router'
import Menu from '../../components/menu'
import SearchBarContainer from '../../containers/search-bar'
import CityList from '../../containers/city-list-container'
require ('../../assets/styles/common.gcss')
require ('../../assets/weather_icons/weather-icons.gcss')
import s from './_styles.css'

function MainPage (props) {
    return (
        <div className={s.wrap}>
            <header>
                <Link to="/" className={s.logo}>RG <mark>WEATHER</mark></Link>
                <Menu />
            </header>

            <main>
                <SearchBarContainer/>
                <CityList/>
                {props.children}
            </main>

            <footer>
                <nav>
                    <a href="">Links</a>
                    <a href="">Links</a>
                    <a href="">Links</a>
                </nav>
            </footer>
        </div>
    );
}

export default MainPage