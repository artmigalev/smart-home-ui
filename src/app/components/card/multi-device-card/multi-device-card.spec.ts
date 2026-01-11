import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiDeviceCard } from './multi-device-card';

describe('MultiDeviceCard', () => {
  let component: MultiDeviceCard;
  let fixture: ComponentFixture<MultiDeviceCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiDeviceCard],
    }).compileComponents();

    fixture = TestBed.createComponent(MultiDeviceCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
