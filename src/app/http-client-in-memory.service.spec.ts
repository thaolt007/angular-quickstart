import { TestBed, inject } from '@angular/core/testing';

import { HttpClientInMemoryService } from './http-client-in-memory.service';

describe('HttpClientInMemoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClientInMemoryService]
    });
  });

  it('should be created', inject([HttpClientInMemoryService], (service: HttpClientInMemoryService) => {
    expect(service).toBeTruthy();
  }));
});
