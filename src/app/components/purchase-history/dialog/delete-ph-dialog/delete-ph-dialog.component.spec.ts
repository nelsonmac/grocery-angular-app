import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePhDialogComponent } from './delete-ph-dialog.component';

describe('DeletePhDialogComponent', () => {
  let component: DeletePhDialogComponent;
  let fixture: ComponentFixture<DeletePhDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletePhDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletePhDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
