import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  cities = [
    'Bratislava',
    'Humenné',
    'Koromľa',
    'Košice',
    'Michalovce',
    'Sobrance',
  ];

  cityControl: FormControl;

  constructor() {}
}
