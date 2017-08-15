import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TastingComponent } from './tasting.component';

describe('TastingComponent', () => {
  let component: TastingComponent;
  let fixture: ComponentFixture<TastingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TastingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TastingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
