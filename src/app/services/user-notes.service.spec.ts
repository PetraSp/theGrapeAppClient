import { TestBed, inject } from '@angular/core/testing';

import { UserNotesService } from './user-notes.service';

describe('UserNotesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserNotesService]
    });
  });

  it('should be created', inject([UserNotesService], (service: UserNotesService) => {
    expect(service).toBeTruthy();
  }));
});
