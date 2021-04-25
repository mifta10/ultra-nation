import React from 'react';
import './Nation.css'

const Nation = (props) => {
  const { name, flag, population, region ,timezones, area } = props.country;
  const handleAddCountry = props.handleAddCountry;
  return (

        <div className="card">
          <img className="card-img-top" src={flag} alt="Card image cap" />
          <div className="card-body">
            <h3 className="card-title">{name}</h3>
            <p className="card-text">Population: {population}</p>
            <p><small>Area:{area}</small></p>
            <p><small>Region:{region}</small></p>
            <p><small>TimeZone:{timezones}</small></p>
            <button onClick={() => handleAddCountry(props.country)}>Add Country</button>
          </div>
        </div>
     

  );
};

export default Nation;