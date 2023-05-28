import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http :HttpClient) { }

  getWeather(ctiyName :string){
    return this.http.get(`${environment.baseApi}/weather?q=${ctiyName}&appid=${environment.API_KEY}`)
  }

}
