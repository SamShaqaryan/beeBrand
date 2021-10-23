import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HpServicesComponent } from './hp-services.component';

describe('HpServicesComponent', () => {
  let component: HpServicesComponent;
  let fixture: ComponentFixture<HpServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HpServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HpServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
