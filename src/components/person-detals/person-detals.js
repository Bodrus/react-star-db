import React, { Component } from 'react';
import './person-detals';

export default class PersonDetals extends Component {
  render() {
    return (
      <div className="personal-details card">
        <img className="personal-image"
          src="#" />
        
        <div className="card-body">
          <h4>R2-D2</h4>
          <ul className="list-group list-group-flush">
            <li>
              <span className="list-group-item">Gender</span>
              <span>male</span>
            </li>
            <li>
              <span className="list-group-item">Birth Year</span>
              <span>43</span>
            </li>
            <li>
              <span className="list-group-item">Eye Color</span>
              <span>red</span>
            </li>
          </ul>
        </div>
        
      </div>
    )
  }
}