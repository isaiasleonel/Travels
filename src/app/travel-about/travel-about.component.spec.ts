import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelAboutComponent } from './travel-about.component';

describe('TravelAboutComponent', () => {
  let component: TravelAboutComponent;
  let fixture: ComponentFixture<TravelAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TravelAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
