import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Travel } from './travel-list/Travel';

@Injectable({
  providedIn: 'root',
})
export class TravelCartService {
  // se implementa BehaviorSubject
  private _carList: Travel[] = [];
  cartList: BehaviorSubject<Travel[]> = new BehaviorSubject(this._carList);

  constructor() {}
  /**
   *   Recibimos por parametros
   */
  addToCart(travel: Travel) {
    // Busca si hay alguna cerveza igual
    let item: Travel | undefined;
    item = this._carList.find((v1) => v1.name == travel.name);

    // En caso que no haya iguales, Pusheame esos datos
    if (!item) {
      console.log('entro al IF');
      //agregamos a nuestro arreglo carList y clonamos♊ objetos con " ... "
      this._carList.push({ ...travel });
    } else {
      console.log('entro al ELSE');
      item.quantity += travel.quantity;
    }

    //emite nuevo🆕 valor (variable privada) ♻
    this.cartList.next(this._carList); //igual al emit de eventos
    console.log('llegue al arreglo ');
  }

  getCartlist(): Travel[] {
    return this._carList;
  }
}
