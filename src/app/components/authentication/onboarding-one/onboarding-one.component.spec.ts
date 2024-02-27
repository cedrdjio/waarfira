import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingOneComponent } from './onboarding-one.component';

describe('OnboardingOneComponent', () => {
  let component: OnboardingOneComponent;
  let fixture: ComponentFixture<OnboardingOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnboardingOneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnboardingOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
