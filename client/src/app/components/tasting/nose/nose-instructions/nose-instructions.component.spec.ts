import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoseInstructionsComponent } from './nose-instructions.component';

describe('NoseInstructionsComponent', () => {
  let component: NoseInstructionsComponent;
  let fixture: ComponentFixture<NoseInstructionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoseInstructionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoseInstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
