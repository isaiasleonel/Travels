import { TestBed } from '@angular/core/testing';

import { TravelCartService } from './travel-cart.service';

describe('TravelCartService', () => {
  let service: TravelCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TravelCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
