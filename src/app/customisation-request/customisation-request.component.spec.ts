import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomisationRequestComponent } from './customisation-request.component';

describe('CustomisationRequestComponent', () => {
  let component: CustomisationRequestComponent;
  let fixture: ComponentFixture<CustomisationRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomisationRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomisationRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
