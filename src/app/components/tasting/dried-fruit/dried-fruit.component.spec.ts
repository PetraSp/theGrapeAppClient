import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriedFruitComponent } from './dried-fruit.component';

describe('DriedFruitComponent', () => {
  let component: DriedFruitComponent;
  let fixture: ComponentFixture<DriedFruitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriedFruitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriedFruitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
