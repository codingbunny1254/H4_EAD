import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReasonAndPerosnalInformationComponent } from './reason-and-perosnal-information.component';

describe('ReasonAndPerosnalInformationComponent', () => {
  let component: ReasonAndPerosnalInformationComponent;
  let fixture: ComponentFixture<ReasonAndPerosnalInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReasonAndPerosnalInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReasonAndPerosnalInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
