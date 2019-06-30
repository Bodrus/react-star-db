/* eslint-disable no-unused-vars */
/* eslint-disable no-mixed-spaces-and-tabs */
import React, {Component} from 'react';
import './error-button.css';

export default class ErrorButton extends Component {
  
  state = {
  	renderError: false
  }
  
  handelButton = () => {
  	this.setState({ renderError: true });
  }
  
  render () {
  	if (this.state.renderError) {
  		this.foo.bar = 0;
  	}
    
  	return (
  		<button
  			className="btn btn-danger btn-lg error-button"
  			onClick={this.handelButton}>
        Throw Error 
  		</button>
  	);
  }
}

