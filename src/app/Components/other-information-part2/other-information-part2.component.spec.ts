import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherInformationPart2Component } from './other-information-part2.component';

describe('OtherInformationPart2Component', () => {
  let component: OtherInformationPart2Component;
  let fixture: ComponentFixture<OtherInformationPart2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherInformationPart2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherInformationPart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
