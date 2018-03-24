import React from 'react';
import { Link } from 'react-router-dom';
const CityItem = ({id, name, handleDelete}) => (
  <div>
      <li key={id}>
        { name } &nbsp;&nbsp;
        <Link to={`/cities/${id}`}>View</Link>
        &nbsp;&nbsp; || &nbsp;&nbsp;
        <a href="#" onClick={()=> handleDelete({id: id})}>Delete</a>
      </li>
  </div>
)

export default CityItem;