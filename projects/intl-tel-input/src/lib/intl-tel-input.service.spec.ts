import { TestBed } from '@angular/core/testing';

import { IntlTelInputService } from './intl-tel-input.service';

describe('IntlTelInputService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IntlTelInputService = TestBed.get(IntlTelInputService);
    expect(service).toBeTruthy();
  });
});
