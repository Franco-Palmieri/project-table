import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeFunctionsComponent } from './pipe-functions.component';

describe('PipeFunctionsComponent', () => {
  let component: PipeFunctionsComponent;
  let fixture: ComponentFixture<PipeFunctionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipeFunctionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeFunctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
