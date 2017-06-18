import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFlippersComponent } from './home-flippers.component';

describe('HomeFlippersComponent', () => {
  let component: HomeFlippersComponent;
  let fixture: ComponentFixture<HomeFlippersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeFlippersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeFlippersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
