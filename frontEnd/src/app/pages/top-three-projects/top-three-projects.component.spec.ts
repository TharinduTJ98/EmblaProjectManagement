import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopThreeProjectsComponent } from './top-three-projects.component';

describe('TopThreeProjectsComponent', () => {
  let component: TopThreeProjectsComponent;
  let fixture: ComponentFixture<TopThreeProjectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopThreeProjectsComponent]
    });
    fixture = TestBed.createComponent(TopThreeProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
