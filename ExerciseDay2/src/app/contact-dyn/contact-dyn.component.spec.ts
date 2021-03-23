import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactDynComponent } from './contact-dyn.component';

describe('ContactDynComponent', () => {
  let component: ContactDynComponent;
  let fixture: ComponentFixture<ContactDynComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactDynComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactDynComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
