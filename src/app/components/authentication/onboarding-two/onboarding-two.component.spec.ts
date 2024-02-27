import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingTwoComponent } from './onboarding-two.component';

describe('OnboardingTwoComponent', () => {
  let component: OnboardingTwoComponent;
  let fixture: ComponentFixture<OnboardingTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnboardingTwoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnboardingTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
