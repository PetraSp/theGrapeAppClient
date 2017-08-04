import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterButtonComponent } from './router-button.component';

describe('RouterButtonComponent', () => {
  let component: RouterButtonComponent;
  let fixture: ComponentFixture<RouterButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
