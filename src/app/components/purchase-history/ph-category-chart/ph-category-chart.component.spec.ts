import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhCategoryChartComponent } from './ph-category-chart.component';

describe('PhCategoryChartComponent', () => {
  let component: PhCategoryChartComponent;
  let fixture: ComponentFixture<PhCategoryChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhCategoryChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhCategoryChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
