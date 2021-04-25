import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Nation from './components/Nation/Nation';
import Cart from './components/Cart/Cart';

function App() {
  const [countries,setCountries] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(()=> {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => {
      setCountries(data);
      //console.log(data);
    })
  } ,[])
  console.log(countries);
  const handleAddCountry = (country) => {
    //console.log("Country added", country);
    const newCart = [...cart, country];
    setCart(newCart);
  }
  
  return (
    <div className="App">
      <h1>Country Loaded:{countries.length}</h1>
      <h4>Country Added:{cart.length}</h4>
      <Cart cart={cart}></Cart>
      <ul>
        {
          countries.map(country => <Nation country={country} handleAddCountry={handleAddCountry} key={country.alpha3Code}></Nation>)
        }
      </ul>
    </div>
  );
}

export default App;
