import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateProjectDetailsComponent } from './candidate-project-details.component';

describe('CandidateProjectDetailsComponent', () => {
  let component: CandidateProjectDetailsComponent;
  let fixture: ComponentFixture<CandidateProjectDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidateProjectDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateProjectDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
