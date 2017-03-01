import React from 'react'
import {Link} from 'react-router'
import Menu from '../../components/menu'
require ('../../assets/styles/common.gcss')
import s from './_styles.css'

import SearchBarContainer from '../../containers/search-bar'
import WeatherList from '../../containers/weather_list'



function MainPage (props) {
    return (
        <div className={s.wrap}>
            <header>
                <Link to="/" className={s.logo}>RG <mark>WEATHER</mark></Link>
                <Menu />
            </header>

            <main>
                <SearchBarContainer/>
                <WeatherList/>
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

