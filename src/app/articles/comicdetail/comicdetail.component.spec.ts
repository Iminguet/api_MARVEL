import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicdetailComponent } from './comicdetail.component';

describe('ComicdetailComponent', () => {
  let component: ComicdetailComponent;
  let fixture: ComponentFixture<ComicdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComicdetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComicdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
