import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { projectCandidate, projectData } from '../candidate';
import { CandidateService } from '../candidate.service';

@Component({
  templateUrl: './candidate-project-details.component.html',
  styleUrls: ['./candidate-project-details.component.css']
})
export class CandidateProjectDetailsComponent implements OnInit {

  pageTitle = "Project Details";
  errorMessage = '';
  project: projectData | undefined;
  project_candidate: projectCandidate[] = [];

  constructor(private route:ActivatedRoute,
    private router: Router,
    private candidateService:CandidateService,
    private http:HttpClient) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.warn(id);
    if (id) {
      this.getProject(id);
      this.getProjectCandidate(id);
    }

  }

  getProject(id: number): void {
    this.candidateService.getProject(id).subscribe((res:any)=>{
      this.project = res;
      console.warn(this.project)
    });
  }

  getProjectCandidate(id: number): void {
    this.candidateService.getProjectCandidate(id).subscribe((res:any)=>{
      this.project_candidate = res;
      console.warn(this.project_candidate)
    });

  }



}
