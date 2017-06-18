import { TestBed, inject } from '@angular/core/testing';

import { DidUknowService } from './did-uknow.service';

describe('DidUknowService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DidUknowService]
    });
  });

  it('should be created', inject([DidUknowService], (service: DidUknowService) => {
    expect(service).toBeTruthy();
  }));
});
