import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, delay } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeatherForCity(city: string): Observable<any> {
    console.log('som tu');
    const path = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=0fa8a4eec652a4e4df199a8b3e413e50`;
    return this.http.get(path);
  }
}
