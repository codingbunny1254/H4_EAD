import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherInformationPart3Component } from './other-information-part3.component';

describe('OtherInformationPart3Component', () => {
  let component: OtherInformationPart3Component;
  let fixture: ComponentFixture<OtherInformationPart3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherInformationPart3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherInformationPart3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
