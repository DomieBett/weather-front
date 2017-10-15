import { Component, OnInit } from '@angular/core';

import { WeatherApiService } from './../weather-api.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {

  weatherObj = {
    'weather': 'weather',
    'place': 'place',
    'main': 'main',
    'wind': 'wind',
    'icon': 'icon'
  };

  status = "loading";

  constructor(private weatherApi: WeatherApiService) { }

  ngOnInit() {
    this.getWeather();
  }

  getWeather() {
    this.weatherApi.getCoords().then(location =>{
      let response = this.weatherApi.getCurrentWeather(location)

      if (!response)
        return "No response"

      response.subscribe(response => {
        let weatherJson = response.json();
        this.weatherObj.weather = weatherJson.weather[0];
        this.weatherObj.place = weatherJson.name;
        this.weatherObj.main = weatherJson.main;
        this.weatherObj.wind = weatherJson.wind;
        let iconUrl:string = "https://openweathermap.org/img/w/";
        iconUrl +=  weatherJson.weather[0].icon
        iconUrl += ".png";
        this.weatherObj.icon = iconUrl;
        
        this.status = "active";
      });
    });
  }
}
