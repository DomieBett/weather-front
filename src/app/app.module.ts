import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppRoutesModule } from './routes/app-routes.module';

import { AppComponent } from './app.component';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { ForecastComponent } from './forecast/forecast.component';
import { MainComponent } from './main/main.component';

import { WeatherApiService } from './weather-api.service';
import { GraphComponent } from './graph/graph.component';
import { WeatherComponent } from './weather/weather.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrentWeatherComponent,
    ForecastComponent,
    MainComponent,
    GraphComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutesModule
  ],
  providers: [
    WeatherApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
