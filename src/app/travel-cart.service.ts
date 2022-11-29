import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Travel } from './travel-list/Travel';

@Injectable({
  providedIn: 'root',
})
export class TravelCartService {
  // se implementa BehaviorSubject
  private _carList: Travel[] = [];
  cartList: BehaviorSubject<Travel[]> = new BehaviorSubject(this._carList);
  constructor() {}

  getProductData() {
    return this.cartList.asObservable();
  }

  /**
   *   Recibimos por parametros
   */
  addToCart(travel: Travel) {
    // Busca si hay alguna cerveza igual
    let item: Travel | undefined;
    item = this._carList.find((v1) => v1.name == travel.name);

    // En caso que no haya iguales, Pusheame esos datos
    if (!item) {
      //agregamos a nuestro arreglo carList y clonamos♊ objetos con " ... "

      this._carList.push({ ...travel });
    } else {
      item.quantity += travel.quantity;
    }
    //emite nuevo🆕 valor (variable privada) ♻
    this.cartList.next(this._carList); //igual al emit de eventos
  }

  getCartlist(): Travel[] {
    return this._carList;
  }

  //Remove Cart data one by one
  removeCartData(product: Travel) {
    this._carList.map((a: any, index: any) => {
      if (product.id === a.id) {
        this._carList.splice(index, 1);
        this.cartList.next(this._carList);
      }
    });
  }
  //Remove All Cart Data
  removeAllCart() {
    this._carList = [];
    this.cartList.next(this._carList);
  }
}
