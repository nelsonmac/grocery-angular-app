import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCurrencyDialogComponent } from './delete-currency-dialog.component';

describe('DeleteCurrencyDialogComponent', () => {
  let component: DeleteCurrencyDialogComponent;
  let fixture: ComponentFixture<DeleteCurrencyDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteCurrencyDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteCurrencyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
