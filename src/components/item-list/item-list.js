import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import Spiner from '../spiner';
import ErrorIndicator from '../error-indicator';


import './item-list.css';

export default class ItemList extends Component {
  
  swapiService = new SwapiService();
  
  state = {
    people: [],
    error: false,
    loading: true
  }
  
  
  componentDidMount() {
    this.getAllPeople();
  }
  
  onError = () => {
    this.setState({ 
      error: true,
      loading: false
     });
  }
  
  onPeopleLoaded = (people) => {
    this.setState({ people, loading: false })
  }
  
  getAllPeople = () => {
    this.swapiService.getAllPeople()
    .then((people) => this.onPeopleLoaded(people))
    .catch(this.onError);
  }
  
  getData = (people) => {
    if (!people || people.length === 0) {
      return null;
    }
    
    return (
     <ul className="item-list list-group">
      {people.map(({ name, id }) => 
         <li className="list-group-item" 
             key={id} 
             onClick={() => this.props.onItemSelected(id)}>
             {name} 
         </li>        
      )}
     </ul>   
     );
  }
  
  render() {
    const { people, loading, error } = this.state;
    const errorIndicator = error ? <ErrorIndicator /> : null;
    const peopleList = this.getData(people);
    const loader = loading ? <Spiner /> : null;
    
    return (
      <>
        {errorIndicator}
        {peopleList}
        {loader}
      </>
    ); 
  }
}
