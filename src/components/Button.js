import React, {Component} from 'react';
import '../css/button.css';

class Button extends Component {
    render() {
        return (
            <button onClick={this.props.onClick}> 
                Next
            </button>
        );
    }
} 

export default Button;