/* eslint-disable no-debugger */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import ErrorIndicator from '../error-indicator';

import './people-page.css';


export default class PeoplePage extends Component {
  
  state = {
  	selectedPerson: null,
    onError: false
  }
  
  onPersonSelected = (id) => {
  	this.setState({ selectedPerson: id });
  }
  
  componentDidCatch(error, info) {
    debugger; 
    this.setState({ onError: true });
  }
  
  render() {
    if (this.state.onError) {
      return <ErrorIndicator />;
    }
    
  	return (
  		<div className="row mb2 people-page">
  			<div className="col-md-6">
  				<ItemList onItemSelected={this.onPersonSelected}/>
  			</div>
  			<div className="col-md-6">
  				<PersonDetails personId={this.state.selectedPerson}/>  
  			</div>     
  		</div>
  	);
  }
}