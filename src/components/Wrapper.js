import React, {Component} from 'react';
import Header from './Header';
import PlanetData from './PlanetData';
import FilmData from './FilmData';
import Button from './Button';


const minValue = Math.ceil(1);
const maxValue = Math.floor(61);

class Wrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: null
        };
    }

    randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    btnClick() {
        this.setState(this.randomNumber(minValue, maxValue));
    }

    render() {
        return (
            <div className="wrapper">
                <Header />
                <PlanetData />
                <FilmData />
                <Button onClick={this.btnClick} />
            </div>
        );
    }
}

export default Wrapper;