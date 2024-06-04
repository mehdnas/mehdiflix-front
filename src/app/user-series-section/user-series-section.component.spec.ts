import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSeriesSectionComponent } from './user-series-section.component';

describe('UserSeriesSectionComponent', () => {
  let component: UserSeriesSectionComponent;
  let fixture: ComponentFixture<UserSeriesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserSeriesSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserSeriesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
