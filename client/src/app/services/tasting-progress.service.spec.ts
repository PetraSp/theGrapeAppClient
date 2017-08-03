import { TestBed, inject } from '@angular/core/testing';

import { TastingProgressService } from './tasting-progress.service';

describe('TastingProgressService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TastingProgressService]
    });
  });

  it('should be created', inject([TastingProgressService], (service: TastingProgressService) => {
    expect(service).toBeTruthy();
  }));
});
