import React from 'react'
import {Link} from 'react-router'
import s from './_styles.css'

const Menu = () => {
    return (
        <nav className={s.nav}>
            <Link to="/">Main</Link>
            <Link to="/styles">Style Guide</Link>
        </nav>
    )
}

export default Menu;