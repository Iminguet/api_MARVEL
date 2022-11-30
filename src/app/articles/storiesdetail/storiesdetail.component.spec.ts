import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoriesdetailComponent } from './storiesdetail.component';

describe('StoriesdetailComponent', () => {
  let component: StoriesdetailComponent;
  let fixture: ComponentFixture<StoriesdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoriesdetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoriesdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
