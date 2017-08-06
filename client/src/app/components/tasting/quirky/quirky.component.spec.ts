import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuirkyComponent } from './quirky.component';

describe('QuirkyComponent', () => {
  let component: QuirkyComponent;
  let fixture: ComponentFixture<QuirkyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuirkyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuirkyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
