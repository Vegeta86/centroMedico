import { TestBed, inject } from '@angular/core/testing';

import { FichaService } from './ficha.service';

describe('FichaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FichaService]
    });
  });

  it('should be created', inject([FichaService], (service: FichaService) => {
    expect(service).toBeTruthy();
  }));
});
