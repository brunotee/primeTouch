import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NombreToTestComponent } from './nombre-to-test.component';

describe('NombreToTestComponent', () => {
  let component: NombreToTestComponent;
  let fixture: ComponentFixture<NombreToTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NombreToTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NombreToTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
