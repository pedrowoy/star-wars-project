import React, {Component} from 'react';
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