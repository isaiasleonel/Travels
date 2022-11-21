import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelTravelsComponent } from './travel-travels.component';

describe('TravelTravelsComponent', () => {
  let component: TravelTravelsComponent;
  let fixture: ComponentFixture<TravelTravelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelTravelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TravelTravelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
