import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DidUknowComponent } from './did-uknow.component';

describe('DidUknowComponent', () => {
  let component: DidUknowComponent;
  let fixture: ComponentFixture<DidUknowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DidUknowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DidUknowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
