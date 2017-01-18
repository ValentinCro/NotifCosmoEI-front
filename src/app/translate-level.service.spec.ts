/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TranslateLevelService } from './translate-level.service';

describe('TranslateLevelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TranslateLevelService]
    });
  });

  it('should ...', inject([TranslateLevelService], (service: TranslateLevelService) => {
    expect(service).toBeTruthy();
  }));
});
