import { TestBed } from '@angular/core/testing';

import { ExjsService } from './exjs.service';

describe('ExjsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExjsService = TestBed.get(ExjsService);
    expect(service).toBeTruthy();
  });
});
