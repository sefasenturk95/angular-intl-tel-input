import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntlTelInputComponent } from './intl-tel-input.component';

describe('IntlTelInputComponent', () => {
  let component: IntlTelInputComponent;
  let fixture: ComponentFixture<IntlTelInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntlTelInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntlTelInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
