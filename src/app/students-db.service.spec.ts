/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StudentsDBService } from './students-db.service';

describe('StudentsDBService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudentsDBService]
    });
  });

  it('should ...', inject([StudentsDBService], (service: StudentsDBService) => {
    expect(service).toBeTruthy();
  }));
});
