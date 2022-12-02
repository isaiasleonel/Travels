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
  cartList$: Observable<Travel[]>;
  //mandamos por parametros al componente atravez de injectables de Idependencia
  constructor(private cart: TravelCartService) {
    this.cartList$ = cart.cartList.asObservable();
  }

  total() {
    let suma = 0;
    this.cart.cartList.getValue().forEach((travel) => {
      suma += travel.quantity * travel.price;
    });
    console.log(this.cartList$);
    return suma;
  }

  removeCartData(travel: Travel) {
    this.cart.removeCartData(travel);
  }
  removeAllCart() {
    this.cart.removeAllCart();
  }

  ngOnInit(): void {}
}
