import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackFruitComponent } from './black-fruit.component';

describe('BlackFruitComponent', () => {
  let component: BlackFruitComponent;
  let fixture: ComponentFixture<BlackFruitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlackFruitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlackFruitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
