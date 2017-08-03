import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppearancesComponent } from './appearances.component';

describe('AppearancesComponent', () => {
  let component: AppearancesComponent;
  let fixture: ComponentFixture<AppearancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppearancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppearancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
