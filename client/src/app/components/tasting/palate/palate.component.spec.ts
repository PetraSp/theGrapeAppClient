import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PalateComponent } from './palate.component';

describe('PalateComponent', () => {
  let component: PalateComponent;
  let fixture: ComponentFixture<PalateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PalateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PalateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
