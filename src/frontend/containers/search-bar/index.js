import React, {Component} from 'react'
import s from './_styles.css'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {fetchWeather} from '../../actions'

class SearchBarContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {term: ''}
    }

    onInputChange = (ev) => {
        this.setState({
            term: ev.target.value
        })
    }

    onFormSubmit = (ev) => {
        ev.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({term: ''})
    }

    componentWillMount() {
        this.props.fetchWeather('Saint Petersburg');
        this.props.fetchWeather('New Orleans');
        this.props.fetchWeather('Rome');
        this.props.fetchWeather('New York');
    }

    render() {
        return (
            <form className={s.search_form} onSubmit={this.onFormSubmit} autoComplete="off">
               <div className="input_wrap">
                    <input type="search" value={this.state.term} onChange={this.onInputChange} id="input_txt"/>
                    <label htmlFor="input_txt"><span>Check results for your favorite city</span></label>
                </div>
            </form>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchWeather}, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBarContainer)