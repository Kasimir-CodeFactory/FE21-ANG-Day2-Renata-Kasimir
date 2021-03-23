import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDynComponent } from './main-dyn.component';

describe('MainDynComponent', () => {
  let component: MainDynComponent;
  let fixture: ComponentFixture<MainDynComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainDynComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainDynComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
