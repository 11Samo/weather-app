import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, delay } from 'rxjs/operators';
import { City } from './city';

@Injectable({ providedIn: 'root' })
export class WeatherService {
  cities: City[];
  constructor(private http: HttpClient) {
    this.cities = [
      new City('Bratislava', 48.15, 17.13),
      new City('Humenné', 48.93, 21.9),
      new City('Koromľa', 48.71, 22.29),
      new City('Košice', 48.71, 21.25),
      new City('Michalovce', 48.75, 21.91),
      new City('Sobrance', 48.74, 22.17),
    ];
  }
  getCurrentTemp(city: string): Observable<any> {
    const path = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=0fa8a4eec652a4e4df199a8b3e413e50`;

    return this.http.get(path);
  }

  getWeatherForCity(name: string): Observable<any> {
    const coords = this.getCoordinate(name);

    const path = `https://api.openweathermap.org/data/2.5/onecall?lat=${
      coords ? coords.lat : null
    }&lon=${
      coords ? coords.lon : null
    }&exclude=minutely,hourly,alerts&units=metric&appid=0fa8a4eec652a4e4df199a8b3e413e50`;

    return this.http.get(path);
  }

  getCoordinate(city: string): City {
    for (let obj of this.cities) {
      if (obj.name == city) {
        return obj;
      }
    }
    return null;
  }
}
