import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesComparisonComponent } from './notes-comparison.component';

describe('NotesComparisonComponent', () => {
  let component: NotesComparisonComponent;
  let fixture: ComponentFixture<NotesComparisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotesComparisonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
