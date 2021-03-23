import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroFixComponent } from './hero-fix.component';

describe('HeroFixComponent', () => {
  let component: HeroFixComponent;
  let fixture: ComponentFixture<HeroFixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroFixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroFixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
