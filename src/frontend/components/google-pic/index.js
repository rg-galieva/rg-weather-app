import React, {PropTypes, Component} from 'react'
import {findDOMNode, render} from 'react-dom'
import axios from 'axios'
import {API_KEY_GOOGLE} from '../../keys'

class GooglePic extends Component {
    setApiPlaceQuery = () => {
        let {lat, lng} = this.props.coords;
        return `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=100&type=city_hall,museum&key=${API_KEY_GOOGLE}`
    };

    getPicRef = () => {
        return axios.get(this.setApiPlaceQuery())
            .then((response) => {
                let picRef = response.data.results[0].photos[0].photo_reference;
                console.log('picRef ', picRef);
                return picRef;
            })
            .then((picRef) => {
                const API_PIC_QUERY = `https://maps.googleapis.com/maps/api/place/photo?maxheight=800&maxwidth=400&photoreference=${picRef}&key=${API_KEY_GOOGLE}`;
                this.refs.google_img.style.backgroundImage = `url(${API_PIC_QUERY})`;
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    componentDidMount() {
        this.getPicRef();
    }

    render() {
        let {} = this.props;

        return (
            <div ref="google_img" className="google_img"></div>
        );
    }

    static propTypes = {
        coords: PropTypes.shape({
            lat: PropTypes.number.isRequired,
            lng: PropTypes.number.isRequired
        })
    };
}

export default GooglePic;