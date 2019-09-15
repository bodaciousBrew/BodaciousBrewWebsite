import { TestBed } from '@angular/core/testing';

import { GradientToolService } from './gradient-tool.service';

describe('GradientToolService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GradientToolService = TestBed.get(GradientToolService);
    expect(service).toBeTruthy();
  });
});
