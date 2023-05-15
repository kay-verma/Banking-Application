import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBeneficiariesComponent } from './show-beneficiaries.component';

describe('ShowBeneficiariesComponent', () => {
  let component: ShowBeneficiariesComponent;
  let fixture: ComponentFixture<ShowBeneficiariesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowBeneficiariesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowBeneficiariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
