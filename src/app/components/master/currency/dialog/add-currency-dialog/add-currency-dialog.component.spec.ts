import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCurrencyDialogComponent } from './add-currency-dialog.component';

describe('AddCurrencyDialogComponent', () => {
  let component: AddCurrencyDialogComponent;
  let fixture: ComponentFixture<AddCurrencyDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCurrencyDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCurrencyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
