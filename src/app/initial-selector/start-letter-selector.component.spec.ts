import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartLetterSelectorComponent } from './start-letter-selector.component';

describe('InitialSelectorComponent', () => {
  let component: StartLetterSelectorComponent;
  let fixture: ComponentFixture<StartLetterSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StartLetterSelectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartLetterSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
