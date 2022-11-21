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
      quantity: 0,
      clearance: false,
    },
    {
      name: 'Peru',
      price: 5200,
      image: 'assets/uruguay.png',
      start_date: ' 21/ 03/ 2022',
      duration: 20,
      stock: 0,
      quantity: 0,
      clearance: true,
    },
  ];

  ngOnInit(): void {}

  upQuantity(travel: Travel): void {
    if (travel.quantity < travel.stock) {
      travel.quantity++;
    }

    // if (this.quantity < this.max) {
    //   this.quantity++;
    //   this.quantityChange.emit(this.quantity);
    // } else this.maxReached.emit('Se alcanzo el limite');
  }

  downQuantity(travel: Travel): void {
    if (travel.quantity > 0) {
      travel.quantity--;

      // if (this.quantity > 0) {
      //   this.quantity--;
      //   this.quantityChange.emit(this.quantity);
      // }
    }

    // onChangeQuantity(): void {
    //   console.log(this.quantity);
    //   this.quantityChange.emit(this.quantity);
    // }
  }
}
