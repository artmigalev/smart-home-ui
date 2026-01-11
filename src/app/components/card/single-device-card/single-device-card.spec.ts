import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleDeviceCard } from './single-device-card';

describe('SingleDeviceCard', () => {
  let component: SingleDeviceCard;
  let fixture: ComponentFixture<SingleDeviceCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleDeviceCard],
    }).compileComponents();

    fixture = TestBed.createComponent(SingleDeviceCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
