import { TestBed } from '@angular/core/testing';

import { UsuarioMockService } from './usuariomock.service';

describe('UsuariomockService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsuarioMockService = TestBed.get(UsuarioMockService);
    expect(service).toBeTruthy();
  });
});
