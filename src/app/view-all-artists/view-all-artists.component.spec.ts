import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllArtistsComponent } from './view-all-artists.component';

describe('ViewAllArtistsComponent', () => {
  let component: ViewAllArtistsComponent;
  let fixture: ComponentFixture<ViewAllArtistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllArtistsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllArtistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
