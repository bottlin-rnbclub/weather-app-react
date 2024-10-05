# weather-app-react

## Installation
Install my-project with npm

```
  npm install my-project
  cd my-project
  npm start build
```

    
## Usage/Examples

```
  import react from 'react'

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
```


## Support

For support - email eaglesplash507@gmail.com

## Run Locally

Clone the project

```
  git clone https://link-to-project
```

Go to the project directory

  cd my-project

Install dependencies

  npm install

Start the server

  npm start build


# project pictures

![Image alt](https://github.com/bottlin-rnbclub/weather-app-react/blob/main/img/1.png)
![Image alt](https://github.com/bottlin-rnbclub/weather-app-react/blob/main/img/2.png)
![Image alt](https://github.com/bottlin-rnbclub/weather-app-react/blob/main/img/3.png)
