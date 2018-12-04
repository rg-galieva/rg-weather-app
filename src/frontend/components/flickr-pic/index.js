import React, {PropTypes, Component} from 'react'
import axios from 'axios'

const API_KEY_FLICKR = process.env.API_KEY_FLICKR;

class FlickrPic extends Component {
    setApiPlaceQuery = () => {
        return `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY_FLICKR}&tags=city%2C+view%2C+${this.props.country}&text=${this.props.title}&sort=relevance&accuracy=11&safe_search=1&per_page=1&page=1&format=json&nojsoncallback=1`
    };

    getPicRef = () => {
        return axios.get(this.setApiPlaceQuery())
            .then((response) => {
                let picRef = response.data.photos.photo;
                return picRef;
            })
            .then((picRef) => {
                const pic = picRef[0];
                const API_PIC_QUERY = `https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}_z.jpg`;
                this.refs.flickr_img.style.backgroundImage = `url(${API_PIC_QUERY})`;
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    componentDidMount() {
        this.getPicRef();
    }

    render() {
        return (
            <div ref="flickr_img" className="flickr_img"></div>
        );
    }

    static propTypes = {
        title: PropTypes.string.isRequired,
        country: PropTypes.string.isRequired
    };
}

export default FlickrPic;
