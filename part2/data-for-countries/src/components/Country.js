import axios from "axios";
import React, { useEffect, useState } from 'react';
import Weather from "./Weather";

const Country = (props) => {
  const apikey = 'd9756920cb3f88f9e5f6d13b6d28a808';
  const [Theweather, setWeather] = useState()

  useEffect(() => {
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${props.capital}&appid=${apikey}`)
      .then(
        response => {
          console.log('response', response);
          setWeather(response.data);
        }
      )
  }, [])

  const displayWeather = () => {
    if (Theweather) {
      return <Weather capital={props.capital} Theweather={Theweather} />
    }
  }

  return (
    <div>
      <h1>{props.name.common}</h1>
      <br />
      <p>capital {props.capital}<br />population {props.population}</p>
      <h2>languages</h2>
      <ul>
        {Object.values(props.languages).map(
          language => <li key={language}>{language}</li>
        )}
      </ul>
      <img src={props.flags.png} alt="" />
      {
        displayWeather()
      }

    </div>
  )
}

export default Country;