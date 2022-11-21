import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TravelCartService } from '../travel-cart.service';
import { Travel } from '../travel-list/Travel';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  // cartList$: Beer[];
  cartList$: Observable<Travel[]>;
  //mandamos por parametros al componente atravez de injectables de Idependencia
  constructor(private cart: TravelCartService) {
    this.cartList$ = cart.cartList.asObservable();

    // this.cartList$ = cart.cartList;

    console.log(this.cartList$);
    console.log(cart.getCartlist());
    // this.cart = new BeerCartService();
  }

  ngOnInit(): void {}
}
