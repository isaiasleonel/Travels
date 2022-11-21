import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TravelAboutComponent } from './travel-about/travel-about.component';
import { TravelTravelsComponent } from './travel-travels/travel-travels.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'travels',
    pathMatch: 'full',
  },
  {
    path: 'travels',
    component: TravelTravelsComponent,
  },
  {
    path: 'about',
    component: TravelAboutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
