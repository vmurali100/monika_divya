import { TestBed } from '@angular/core/testing';

import { MyLibMkService } from './my-lib-mk.service';

describe('MyLibMkService', () => {
  let service: MyLibMkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyLibMkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
