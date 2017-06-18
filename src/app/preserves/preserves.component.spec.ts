import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreservesComponent } from './preserves.component';

describe('PreservesComponent', () => {
  let component: PreservesComponent;
  let fixture: ComponentFixture<PreservesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreservesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreservesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
