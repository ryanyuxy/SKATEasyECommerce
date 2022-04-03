import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewArtistDetailsComponent } from './view-artist-details.component';

describe('ViewArtistDetailsComponent', () => {
  let component: ViewArtistDetailsComponent;
  let fixture: ComponentFixture<ViewArtistDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewArtistDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewArtistDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
