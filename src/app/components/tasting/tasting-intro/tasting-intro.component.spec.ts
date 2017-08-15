import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TastingIntroComponent } from './tasting-intro.component';

describe('TastingIntroComponent', () => {
  let component: TastingIntroComponent;
  let fixture: ComponentFixture<TastingIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TastingIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TastingIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
