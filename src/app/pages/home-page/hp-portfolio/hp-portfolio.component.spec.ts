import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HpPortfolioComponent } from './hp-portfolio.component';

describe('HpPortfolioComponent', () => {
  let component: HpPortfolioComponent;
  let fixture: ComponentFixture<HpPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HpPortfolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HpPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
