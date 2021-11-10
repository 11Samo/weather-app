import { Component, OnInit } from '@angular/core';
import { City } from '../city';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  // data$: Observable<any>;

  cities = [
    'Bratislava',
    'Humenné',
    'Koromľa',
    'Košice',
    'Michalovce',
    'Sobrance',
  ];

  search: string;

  constructor() {}
  ngOnInit() {}

  // ngOnInit(): void {
  //   this.data$ = this.route.params.pipe(
  //     map((params) => params.locationName),
  //     filter((name) => !!name),
  //     tap(() => {
  //       this.loading = true;
  //     }),
  //     concatMap((name) => this.weatherService.getWeatherForCity(name)),
  //     tap((dat) => {
  //       this.loading = false;
  //       this.location = this.route.snapshot.paramMap.get('locationName');
  //     })
  //   );
  // }

  searchCity(event: Event) {
    this.cities = this.cities.filter((city) =>
      city.toLowerCase().startsWith((<HTMLInputElement>event.target).value)
    );
  }
}
