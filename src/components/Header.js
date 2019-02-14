import React, {Component} from 'react';
import '../css/header.css';

class Header extends Component {
    render() {
        return (
            <header>
                <h1>{this.props.planetName}</h1>
            </header>
        );
    }
}

export default Header;