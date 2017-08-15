import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedFruitComponent } from './red-fruit.component';

describe('RedFruitComponent', () => {
  let component: RedFruitComponent;
  let fixture: ComponentFixture<RedFruitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedFruitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedFruitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
