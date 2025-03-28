import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningTopicsComponent } from './learning-topics.component';

describe('LearningTopicsComponent', () => {
  let component: LearningTopicsComponent;
  let fixture: ComponentFixture<LearningTopicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearningTopicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearningTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
