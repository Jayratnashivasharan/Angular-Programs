import { TestBed } from '@angular/core/testing';

import { CounterservicesComponent } from './counterservices.component';

describe('CounterservicesComponent', () => {
  let service: CounterservicesComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CounterservicesComponent);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should increment and decrement the count', () => {
    service.increment();
    service.increment();
    service.decrement();

    expect(service.count).toBe(1);
  });

  it('should reset the count', () => {
    service.increment();
    service.reset();

    expect(service.count).toBe(0);
  });
});
