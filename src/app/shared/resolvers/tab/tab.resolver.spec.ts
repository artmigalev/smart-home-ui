import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { tabResolver } from './tab.resolver';

describe('tabResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) =>
    TestBed.runInInjectionContext(() => tabResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
