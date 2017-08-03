import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoseComponent } from './nose.component';

describe('NoseComponent', () => {
  let component: NoseComponent;
  let fixture: ComponentFixture<NoseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
