import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VarTemplateComponent } from './var-template.component';

describe('VarTemplateComponent', () => {
  let component: VarTemplateComponent;
  let fixture: ComponentFixture<VarTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VarTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VarTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
