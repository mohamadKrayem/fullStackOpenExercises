import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Country from './components/Country';

function App() {
  const [enter, setEnter] = useState("");
  const [countries, setCountries] = useState([]);
  const [finale, setFinale] = useState([]);
  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(
        response => {
          setCountries(response.data)
        }
      )
  }, [])


  const handleEnter = (event) => {
    const result = event.target.value;
    if (result == "") setFinale([]);
    setEnter(result);
    const filtered = countries.filter(
      country => {
        if (country.name.common.toLowerCase().includes(result.toLowerCase())) {
          console.log(country)
          return country
        }
      }
    )
    console.log('finlter', filtered)
    if (filtered.length <= 10)
      setFinale(filtered)
  }
  console.log('finale', finale)
  const fill = () => {
    console.log('hello')

  }

  return (
    <div>
      find countries<input value={enter} onChange={handleEnter} />
      {
        finale.map(
          country => {
            if (finale.length > 1)
              return <p key={country.cca2}>
                {country.name.common}
                <button onClick={
                  () => setFinale([country])
                }>show</button>
              </p>
            else
              return <Country
                {...country}
                key={country.cca2}
              />
          }
        )
      }
    </div>
  );
}

export default App;
