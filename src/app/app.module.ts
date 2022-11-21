import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TravelListComponent } from './travel-list/travel-list.component';
import { TravelAboutComponent } from './travel-about/travel-about.component';
import { TravelTravelsComponent } from './travel-travels/travel-travels.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [AppComponent, TravelListComponent, TravelAboutComponent, TravelTravelsComponent, CartComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
