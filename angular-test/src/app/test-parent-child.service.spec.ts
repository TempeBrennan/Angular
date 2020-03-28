import { TestBed } from '@angular/core/testing';

import { TestParentChildService } from './test-parent-child.service';

describe('TestParentChildService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TestParentChildService = TestBed.get(TestParentChildService);
    expect(service).toBeTruthy();
  });
});
