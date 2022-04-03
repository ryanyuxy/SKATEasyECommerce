import { TestBed } from '@angular/core/testing';

import { CustomisationRequestService } from './customisation-request.service';

describe('CustomisationRequestService', () => {
  let service: CustomisationRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomisationRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
