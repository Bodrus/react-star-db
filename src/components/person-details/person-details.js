/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import Spiner from '../spiner';
import ErrorButton from '../error-button';

import './person-details.css';

export default class PersonDetails extends Component {
  
  swapiService = new SwapiService;
  
  componentDidMount() {
  	this.updatePerson(); 
  }
  
  componentDidUpdate(prefProps) {
  	const { personId } = this.props;
  	if (prefProps.personId !== personId) {
  		this.setState({ loading: true });
  		this.updatePerson(personId);
  	}
  }
  
  state = {
  	person: null,
  	loading: true
  }
  
  updatePerson = () => {
  	const { personId } = this.props;
  	if (!personId) {   
  		return;
  	}
  	this.swapiService
  		.getPerson(personId)
  		.then((person) => this.setState({ person, loading: false }));
  }
  
  
  render() {
  	if (!this.state.person) {
  		return <span>Select a person from a list</span>;
  	}
    
  	const { name, gender,
  		birthYear, eyeColor, id } = this.state.person;
  	const { loading } = this.state;
    
            
  	const data = (
  		<div className="person-details card">
  			<img className="person-image"
  				src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} />

  			<div className="card-body">
  				<h4>{name}</h4>
  				<ul className="list-group list-group-flush">
  					<li className="list-group-item">
  						<span className="term">Gender</span>
  						<span>{gender}</span>
  					</li>
  					<li className="list-group-item">
  						<span className="term">Birth Year</span>
  						<span>{birthYear}</span>
  					</li>
  					<li className="list-group-item">
  						<span className="term">Eye Color</span>
  						<span>{eyeColor}</span>
  					</li>
  				</ul>
  				<ErrorButton />
  			</div>
  		</div>
  	);
    
  	const noData = loading ? <Spiner /> : null;
  	const renderData = !loading ? data : null;
       
  	return (
      <>
      {noData}
      {renderData}
      </>
  	);
    
    
  }
}
