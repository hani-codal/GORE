import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeStoriesComponent } from './life-stories.component';

describe('LifeStoriesComponent', () => {
  let component: LifeStoriesComponent;
  let fixture: ComponentFixture<LifeStoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifeStoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
