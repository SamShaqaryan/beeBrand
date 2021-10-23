import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HpPricingComponent } from './hp-pricing.component';

describe('HpPricingComponent', () => {
  let component: HpPricingComponent;
  let fixture: ComponentFixture<HpPricingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HpPricingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HpPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
