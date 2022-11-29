import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Travel } from './travel-list/Travel';

const URL = 'https://6380ea698efcfcedac12f8c4.mockapi.io/Travel';

@Injectable({
  providedIn: 'root',
})
export class TravelDataService {
  constructor(private http: HttpClient) {}

  //api
  public geetAll(): Observable<Travel[]> {
    // Funcion que da boolean random
    const randomBoolean = () => Math.random() >= 0.5;
    //consumimos el api
    return this.http.get<Travel[]>(URL).pipe(
      tap((travels: Travel[]) =>
        travels.forEach((travel) => (travel.quantity = 0))
      ),
      tap((travels: Travel[]) =>
        travels.forEach((travel) => (travel.clearance = randomBoolean()))
      )
    );
  }
}
