import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactChildrenComponent } from './contact-children.component';

describe('ContactChildrenComponent', () => {
  let component: ContactChildrenComponent;
  let fixture: ComponentFixture<ContactChildrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactChildrenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
