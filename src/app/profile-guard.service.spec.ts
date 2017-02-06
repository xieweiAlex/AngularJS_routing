/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProfileGuardService } from './profile-guard.service';

describe('ProfileGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProfileGuardService]
    });
  });

  it('should ...', inject([ProfileGuardService], (service: ProfileGuardService) => {
    expect(service).toBeTruthy();
  }));
});
