import { Component, OnInit } from '@angular/core';
import { City } from '../city';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
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

  ngOnInit(): void {}

  searchCity(event: Event) {
    this.cities = this.cities.filter((city) =>
      city.toLowerCase().startsWith((<HTMLInputElement>event.target).value)
    );
  }
}
