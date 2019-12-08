import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCurrencyDialogComponent } from './edit-currency-dialog.component';

describe('EditCurrencyDialogComponent', () => {
  let component: EditCurrencyDialogComponent;
  let fixture: ComponentFixture<EditCurrencyDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCurrencyDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCurrencyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
