const Weather = (props) => {
  const Theweather = props.Theweather;
  const image = `http://openweathermap.org/img/w/${Theweather.weather[0].icon}.png`;
  function toTextualDescription(degree) {
    if (degree > 337.5) return 'N';
    if (degree > 292.5) return 'NW';
    if (degree > 247.5) return 'W';
    if (degree > 202.5) return 'SW';
    if (degree > 157.5) return 'S';
    if (degree > 122.5) return 'SE';
    if (degree > 67.5) return 'E';
    if (degree > 22.5) { return 'NE'; }
    return 'N';
  }
  return (
    <div>
      <h2>Weather is {props.capital}</h2>
      <h3 style={{ display: 'inline' }}>temperature: </h3><span>{parseInt((parseFloat(Theweather.main.temp) - 273.15) * 9 / 5) + 32}</span>
      <img src={image} /><br />
      <h3 style={{ display: 'inline' }}>wind:</h3>
      {Theweather.wind.speed + ""} mph direction {toTextualDescription(Theweather.wind.deg)}
    </div>
  )
}

export default Weather;