import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherInfo1Component } from './other-info1.component';

describe('OtherInfo1Component', () => {
  let component: OtherInfo1Component;
  let fixture: ComponentFixture<OtherInfo1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherInfo1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherInfo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
