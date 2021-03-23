import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarFixComponent } from './navbar-fix.component';

describe('NavbarFixComponent', () => {
  let component: NavbarFixComponent;
  let fixture: ComponentFixture<NavbarFixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarFixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarFixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
