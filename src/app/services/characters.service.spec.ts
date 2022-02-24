import { TestBed } from '@angular/core/testing';

import { Characters.ServicesService } from './characters.services.service';

describe('Characters.ServicesService', () => {
  let service: Characters.ServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Characters.ServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
