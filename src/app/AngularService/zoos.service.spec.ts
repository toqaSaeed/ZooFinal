import { TestBed, inject } from '@angular/core/testing';

import { ZoosService } from './zoos.service';

describe('ZoosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ZoosService]
    });
  });

  it('should be created', inject([ZoosService], (service: ZoosService) => {
    expect(service).toBeTruthy();
  }));
});
