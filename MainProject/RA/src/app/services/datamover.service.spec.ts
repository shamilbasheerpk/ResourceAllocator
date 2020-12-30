import { TestBed } from '@angular/core/testing';

import { DatamoverService } from './datamover.service';

describe('DatamoverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatamoverService = TestBed.get(DatamoverService);
    expect(service).toBeTruthy();
  });
});
