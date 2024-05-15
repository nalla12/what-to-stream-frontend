import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteredShowsComponent } from './filtered-shows.component';

describe('FilteredShowsComponent', () => {
  let component: FilteredShowsComponent;
  let fixture: ComponentFixture<FilteredShowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilteredShowsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilteredShowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
