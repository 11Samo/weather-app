import { Component, OnInit } from '@angular/core';
import { faAddressBook } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  filmIcon = faAddressBook;
  constructor() {}

  ngOnInit(): void {}
}
