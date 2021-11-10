import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { concatMap, filter, map, tap } from 'rxjs/operators';
import { City } from '../city';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  data$: Observable<any>;
  loading = false;

  cities = [
    'Bratislava',
    'Humenné',
    'Koromľa',
    'Košice',
    'Michalovce',
    'Sobrance',
  ];

  search: string;
  location: string;
  searchCities: string[];
  temperatures: number[] = [];

  constructor(
    private weatherService: WeatherService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.searchCities = this.cities;

    for (let city of this.cities) {
      this.weatherService.getCurrentTemp(city).subscribe((result) => {
        this.temperatures.push(result.main.temp);
      });
    }
  }

  searchCity(event: Event) {
    let searchedCities = [];
    for (let city of this.cities) {
      if (
        city
          .toLowerCase()
          .startsWith((<HTMLInputElement>event.target).value.toLowerCase())
      ) {
        searchedCities.push(city);
      }
    }

    if (searchedCities.length) {
      this.searchCities = searchedCities;
    } else {
      this.searchCities = this.cities;
    }
  }
}
