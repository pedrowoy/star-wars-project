import React, {Component} from 'react';

class FilmData extends Component {
    render() {
        return (
            <p>Featured in {this.props.filmes} films</p>
        );
    }
}

export default FilmData;