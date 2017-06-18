
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAnimalSlidderComponent } from './home-animal-slidder.component';

describe('HomeAnimalSlidderComponent', () => {
  let component: HomeAnimalSlidderComponent;
  let fixture: ComponentFixture<HomeAnimalSlidderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeAnimalSlidderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAnimalSlidderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
