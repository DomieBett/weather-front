import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

	data = {
		animationEnabled: false, // change to true
		title:{
			text: "Basic Column Chart"
		},
		data: [
		{
			/* Type can be "column", "bar", "area", "spline",
			 "pie",etc.*/
			type: "column",
			dataPoints: [
				{ label: "Monday",  y: 20  },
				{ label: "Tuesday", y: 15  },
				{ label: "Wednesday", y: 39  },
				{ label: "Thursday",  y: 30  },
				{ label: "Friday",  y: 5  }
			]
		}
		]
	}

	constructor() { }

	ngOnInit() {
	}

}
