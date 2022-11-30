import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesdetailComponent } from './seriesdetail.component';

describe('SeriesdetailComponent', () => {
  let component: SeriesdetailComponent;
  let fixture: ComponentFixture<SeriesdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeriesdetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeriesdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
