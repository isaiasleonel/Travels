import { Component, OnInit } from '@angular/core';
import { TravelCartService } from '../travel-cart.service';
import { Travel } from './Travel';

@Component({
  selector: 'app-travel-list',
  templateUrl: './travel-list.component.html',
  styleUrls: ['./travel-list.component.css'],
})
export class TravelListComponent implements OnInit {
  constructor(private cart: TravelCartService) {}

  travels: Travel[] = [
    {
      name: 'Uruguay',
      price: 1200,
      image: 'assets/uruguay.png',
      start_date: ' 12/ 22/ 2022',
      duration: 12,
      stock: 6,
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

  /**
   * Se invoca esta funcion de Button
   */
  addToCart(travel: Travel): void {
    //pasamos por parametro "travel"
    this.cart.addToCart(travel);
    //despues de agregar al travel , al stock le quita
    travel.stock -= travel.quantity;
    //reinicia a cero
    travel.quantity = 0;
  }

  /**
   * funcion de entrada y salida de limite de stock en losbtn
   */
  maxReached(m: string) {
    alert(m);
  }
}
