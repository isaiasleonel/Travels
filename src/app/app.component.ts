import { Component, OnInit } from '@angular/core';
import { TravelCartService } from './travel-cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'TRAVELLING THE WORLD ';
  totalItemNumber: number = 0;

  constructor(private cartAPi: TravelCartService) {}

  ngOnInit(): void {
    this.cartAPi.getProductData().subscribe((res) => {
      this.totalItemNumber = res.length;
    });
    // this.cartAPi.removeCartData().subscribe((res) => {
    //   this.totalItemNumber = res.length;
    // });
  }
}
