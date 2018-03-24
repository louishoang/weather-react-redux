import React from 'react';
import { Link } from 'react-router-dom';

const CityItem = ({id, name}) => (
  
  <div>
    
    <Link to={`/cities/${id}`}>
      <li key={id}>
        { name }
      </li>
    </Link>
  </div>
)

export default CityItem;