/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
//import SwapiService from '../../services/swapi-service';
import Spiner from '../spiner';
import ErrorButton from '../error-button';

import './item-details.css';


const Record = ({ item, field, label }) => {
  // во время рендеринга теперь можно пользовать обьект item,
  // который был добавлен в процессе копирования child
  const value = item[field] ? item[field] : 'Top secret!!';
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{value}</span>
    </li>
  );
};
export { Record };

export default class ItemDetails extends Component {

  
  componentDidMount() {
  	this.updateitem(); 
  }
  
  componentDidUpdate(prefProps) {
  	const { itemId } = this.props;
  	if (prefProps.itemId !== itemId) {
  		this.setState({ loading: true });
  		this.updateitem(itemId);
  	}
  }
  
  state = {
  	item: null,
  	loading: true
  }
  
  updateitem = () => {
  	const { itemId, getData } = this.props;
  	if (!itemId) {   
  		return;
  	}
  	getData(itemId)
  		.then((item) => this.setState({ 
        item, 
        loading: false
      }));
  }
  
  
  render() {
    
  	const { item, loading } = this.state;
  	
    if (!item) {
  		return <span>Select a item from a list</span>;
  	}
		
    const { name, image } = item;
  	       
  	const data = (
  		<div className="item-details card">
  			<img className="item-image"
  				src={image} />

  			<div className="card-body">
  				<h4>{name}</h4>
  				<ul className="list-group list-group-flush">
            {
              React.Children.map(this.props.children, (child) => {
                // копируем елемент и добовляем в него обьект item
                return React.cloneElement(child, { item });
              })
            }
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
