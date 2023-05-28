import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';
import { FormsModule } from '@angular/forms';
import { TimeService } from './time.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  today = new Date();
  weather : any;
  weatherIcon : any;
  weatherDetiles : any;
  wind : any;
  ctiyName! :string ;
  city :string = "Cairo"
  temp! : any
  timeCurrent!: any;
  constructor(private service : WeatherService , private time : TimeService){}


  ngOnInit(): void {
    this.loodData()
    this.loodTime()
    }

  loodData(){
    this.service.getWeather(this.city).subscribe((res:any)=>{
      this.weather = res['main']
      this.temp = (this.weather.temp-273.15).toFixed(0)
      this.wind = res['wind']
      this.ctiyName = res['name']
      this.weatherDetiles = res['weather'][0]
      this.weatherIcon = `https://openweathermap.org/img/wn/${this.weatherDetiles.icon}@4x.png`
    })
  }

  search(){
    this.loodData()
    this.loodTime()
  }

  loodTime(){
    this.time.getTime(this.city).subscribe((res:any)=>{
      this.timeCurrent= res["datetime"]
    })
  }

  title = 'Weather-App';
}


