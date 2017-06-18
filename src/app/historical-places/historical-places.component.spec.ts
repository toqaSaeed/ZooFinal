import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricalPlacesComponent } from './historical-places.component';

describe('HistoricalPlacesComponent', () => {
  let component: HistoricalPlacesComponent;
  let fixture: ComponentFixture<HistoricalPlacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoricalPlacesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricalPlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
