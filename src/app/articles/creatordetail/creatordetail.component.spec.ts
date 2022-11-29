import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatordetailComponent } from './creatordetail.component';

describe('CreatordetailComponent', () => {
  let component: CreatordetailComponent;
  let fixture: ComponentFixture<CreatordetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatordetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatordetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
