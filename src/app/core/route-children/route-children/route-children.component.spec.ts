import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteChildrenComponent } from './route-children.component';

describe('RouteChildrenComponent', () => {
  let component: RouteChildrenComponent;
  let fixture: ComponentFixture<RouteChildrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteChildrenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
