import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDidyouknowComponent } from './home-didyouknow.component';

describe('HomeDidyouknowComponent', () => {
  let component: HomeDidyouknowComponent;
  let fixture: ComponentFixture<HomeDidyouknowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeDidyouknowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeDidyouknowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
