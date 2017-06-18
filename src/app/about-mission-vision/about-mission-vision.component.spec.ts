import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMissionVisionComponent } from './about-mission-vision.component';

describe('AboutMissionVisionComponent', () => {
  let component: AboutMissionVisionComponent;
  let fixture: ComponentFixture<AboutMissionVisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutMissionVisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMissionVisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
