import { TestBed } from '@angular/core/testing';

import { GenerativeAiService } from './generative-ai.service';

describe('GenerativeAiService', () => {
  let service: GenerativeAiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenerativeAiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
