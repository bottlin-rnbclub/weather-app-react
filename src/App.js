import React, { Component } from "react";
import "./App.css";

const PLACES = [ // zip по которым api понимает какую инфу выдавать
  { name: "Moscow", zip: "119048" },
  { name: "Saint Petersburg", zip: "190000" },
  { name: "Reims", zip: "08000" },
  { name: "Barcelona", zip: "08002" }
];  

class WeatherDisplay extends Component { // управление состоянием weatherData
  constructor() {
    super();
    this.state = {
      weatherData: null
    };
  }

     componentDidMount() { // запрос get
      const zip = this.props.zip;
      const URL = `http://api.openweathermap.org/data/2.5/weather?q=${zip}&appid=b1b35bba8b434a28a0be2a3e1071ae5b&units=imperial`
      fetch(URL)
      .then(res => {
        if (!res.ok) {
          throw new Error("response was not ok");
        }
        return res.json();
      })
      .then(json => {
        if (json.cod !== 200) {
          throw new Error(json.message); // Обработка ошибки, например, невалидный ZIP-код
        }
        this.setState({ weatherData: json });
      })
      .catch((error) => {
        alert("Error fetching weather data: " + error.message);
        this.setState({ weatherData: null }); // Сбрасываем данные в случае ошибки
      });
  }

  render() {
    const weatherData = this.state.weatherData;
    if (!weatherData) return <div className="wait">Wait please one second</div>;
    const weather = weatherData.weather[0];
    const iconUrl = "http://openweathermap.org/img/w/" + weather.icon + ".png";
    return (
      <div className="container">
        <h1 className="h1">
          {weather.main} in {weatherData.name}
          <img src={iconUrl} alt={weatherData.description} />
        </h1>
        <div className="resualt">
          <p>Текущая: {(Math.round((weatherData.main.temp - 32) / 1.8))}°</p>
          <p>Макс: {(Math.round((weatherData.main.temp_max - 32) / 1.8))}°</p>
          <p>Мин: {(Math.round((weatherData.main.temp_min - 32) / 1.8))}°</p>
          <p>Скорость ветра: {Math.round(weatherData.wind.speed)} миль/час</p>
        </div>
      </div>
    );
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      activePlace: 0
    };
  }
  render() {

    const activePlace = this.state.activePlace;
    return (
      <div className="App">
        {PLACES.map((place, index) => (
          <button
            key={index}
            onClick={() => {
              this.setState({ activePlace: index });
            }}
          >
            {place.name}
          </button>
        ))}
        <WeatherDisplay key={activePlace} zip={PLACES[activePlace].zip} />
      </div>
    );
  }
}

export default App;