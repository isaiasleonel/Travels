import { Component, OnInit } from '@angular/core';
import { Travel } from './Travel';

@Component({
  selector: 'app-travel-list',
  templateUrl: './travel-list.component.html',
  styleUrls: ['./travel-list.component.css'],
})
export class TravelListComponent implements OnInit {
  constructor() {}
  travels: Travel[] = [
    {
      name: 'Uruguay',
      price: 1200,
      image: 'assets/uruguay.png',
      start_date: ' 12/ 22/ 2022',
      duration: 12,
      stock: 2,
    },
    {
      name: 'Peru',
      price: 5200,
      image: 'assets/uruguay.png',
      start_date: ' 21/ 03/ 2022',
      duration: 20,
      stock: 0,
    },
  ];

  ngOnInit(): void {}
}
