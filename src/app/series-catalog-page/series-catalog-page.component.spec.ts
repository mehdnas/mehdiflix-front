import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesCatalogPageComponent } from './series-catalog-page.component';

describe('SeriesCatalogPageComponent', () => {
  let component: SeriesCatalogPageComponent;
  let fixture: ComponentFixture<SeriesCatalogPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeriesCatalogPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeriesCatalogPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
