import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPhComponent } from './add-ph.component';

describe('AddPhComponent', () => {
  let component: AddPhComponent;
  let fixture: ComponentFixture<AddPhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
