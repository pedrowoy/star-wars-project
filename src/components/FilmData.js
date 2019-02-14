import React, {Component} from 'react';
import '../css/filmData.css';

class FilmData extends Component {
    render() {
        return (
            <p className="filmData">Featured in <span className="filmCount">{this.props.filmCount}</span> films</p>
        );
    }
}

export default FilmData;