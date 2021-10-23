import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HpPartnersComponent } from './hp-partners.component';

describe('HpPartnersComponent', () => {
  let component: HpPartnersComponent;
  let fixture: ComponentFixture<HpPartnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HpPartnersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HpPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
