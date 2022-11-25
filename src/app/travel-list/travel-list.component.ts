import { Component, OnInit } from '@angular/core';
import { TravelCartService } from '../travel-cart.service';
import { TravelDataService } from '../travel-data.service';
import { Travel } from './Travel';

@Component({
  selector: 'app-travel-list',
  templateUrl: './travel-list.component.html',
  styleUrls: ['./travel-list.component.css'],
})
export class TravelListComponent implements OnInit {
  constructor(
    private cart: TravelCartService,
    private travelDataService: TravelDataService
  ) {}

  travels: Travel[] = [];

  ngOnInit(): void {
    this.travelDataService
      .geetAll()
      .subscribe((travels) => (this.travels = travels));
  }

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
