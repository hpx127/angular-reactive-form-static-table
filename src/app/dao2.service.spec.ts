import { TestBed } from '@angular/core/testing';

import { Dao2Service } from './dao2.service';

describe('Dao2Service', () => {
  let service: Dao2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Dao2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
