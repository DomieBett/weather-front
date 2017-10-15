import { Injectable } from '@angular/core';
import { Http, Response }from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherApiService {

  baseUrl: string = "https://api.openweathermap.org/data/2.5/";
  apiKey: string = "8d8d7622624228f5e8adc401f8f9cac5";
  location: Coordinates;

  constructor(
    private http: Http,
    private router: Router,
  ) { }

  getCoordinates() {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position => {
        if (this.location) {
          console.log(this.location);
          return "None";
        }
        else {
          this.location = position.coords;
        }
      });
   }
  }

  getCoords(): Promise<Coordinates> {

    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition((position) => {
        resolve(position.coords);
      }, (err) => {
        reject(err);
      });
    });
  }

  getCurrentWeather(location) {

    let url = this.baseUrl + "weather?lat=" + location.latitude +
      "&lon=" + location.longitude + "&appid=" + this.apiKey;

    return this.http.get(url).map(response => response);
  }

  getForecastWeather() {
    this.getCoordinates();

    if (!location) {
      return null;
    }
    let url = this.baseUrl + "forecast?lat=" + this.location.latitude +
      "&lon=" + this.location.longitude + "&appid=" + this.apiKey;

    return this.http.get(url).map(response => response);
  }
}
