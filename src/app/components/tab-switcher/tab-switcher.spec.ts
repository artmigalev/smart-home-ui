import { ComponentFixture, TestBed } from '@angular/core/testing';

import TabSwitcherComponent from './tab-switcher.';

describe('TabSwitcherComponent', () => {
  let component: TabSwitcherComponent;
  let fixture: ComponentFixture<TabSwitcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabSwitcherComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TabSwitcherComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
