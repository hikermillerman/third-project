import { TestBed } from '@angular/core/testing';

import { MochaService } from './mocha.service';

describe('MochaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MochaService = TestBed.get(MochaService);
    expect(service).toBeTruthy();
  });
});
