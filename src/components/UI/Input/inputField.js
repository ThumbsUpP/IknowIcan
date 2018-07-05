import React, { Component } from 'react';
import classes from './inputField.module.css'

class inputField extends Component {
    state = {
        passwordVisibility : false
    }

    render() {
        
        return (
            <div>
                <input 
                    className={classes.Input} 
                    type={this.props.type} 
                    placeholder={this.props.placeholder}
                    onChange={ event => this.props.onChangeHandler(event, this.props.type)}
                    required
                    />
            </div>
        );
    }
}

export default inputField;