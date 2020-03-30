import { TestBed } from '@angular/core/testing';

import { EmpresamockService } from './empresamock.service';

describe('EmpresamockService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmpresamockService = TestBed.get(EmpresamockService);
    expect(service).toBeTruthy();
  });
});
