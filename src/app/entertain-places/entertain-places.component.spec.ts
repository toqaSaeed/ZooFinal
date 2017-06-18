import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntertainPlacesComponent } from './entertain-places.component';

describe('EntertainPlacesComponent', () => {
  let component: EntertainPlacesComponent;
  let fixture: ComponentFixture<EntertainPlacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntertainPlacesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntertainPlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
