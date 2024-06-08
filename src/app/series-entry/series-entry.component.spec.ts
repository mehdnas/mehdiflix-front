import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesEntryComponent } from './series-entry.component';

describe('SeriesEntryComponent', () => {
  let component: SeriesEntryComponent;
  let fixture: ComponentFixture<SeriesEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeriesEntryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeriesEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
