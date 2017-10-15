import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GraphComponent } from './../graph/graph.component';
import { WeatherComponent } from './../weather/weather.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: WeatherComponent },
  { path: 'graphs', component: GraphComponent },
  // { path: '**', component: PagenotfoundComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})

export class AppRoutesModule {}
