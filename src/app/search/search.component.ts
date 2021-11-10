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

  constructor(
    private weatherService: WeatherService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.data$ = this.route.params.pipe(
    //   map((params) => params.locationName),
    //   filter((name) => !!name),
    //   tap(() => {
    //     this.loading = true;
    //   }),
    //   concatMap((name) => this.weatherService.getWeatherForCity(name)),
    //   tap((dat) => {
    //     this.loading = false;
    //     this.location = this.route.snapshot.paramMap.get('locationName');
    //   })
    // );
    this.searchCities = this.cities;
    this.data$ = this.weatherService.getCurrentTemp('Bratislava');
    console.log(this.data$, 'this.data$');
  }

  searchCity(event: Event) {
    // this.searchCities = this.cities.filter((city) =>
    //   city.toLowerCase().startsWith((<HTMLInputElement>event.target).value)
    // );
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
