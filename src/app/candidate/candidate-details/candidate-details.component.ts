import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { candidateData, candidateDetail, candidateStatus } from '../candidate';
import { CandidateService } from '../candidate.service';

@Component({
  templateUrl: './candidate-details.component.html',
  styleUrls: ['./candidate-details.component.css']
})
export class CandidateDetailsComponent implements OnInit {

  pageTitle = 'Candidate Detail';
  errorMessage = '';
  candidate: candidateDetail | undefined;
  candidate_status : candidateStatus[] = [];


  constructor(private route:ActivatedRoute,
    private router: Router,
    private candidateService:CandidateService,
    private http:HttpClient) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.warn(id);
    if (id) {
      this.getCandidate(id);
      this.getCandidateStatus(id);
    }
  }
  getCandidate(id: number): void {
    this.candidateService.getCandidate(id).subscribe((res:any)=>{
      this.candidate = res;
      console.warn(this.candidate)
    });

  }

    getCandidateStatus(id: number): void {
      this.candidateService.getCandidateStatus(id).subscribe((res:any)=>{
        this.candidate_status = res;
        console.warn(this.candidate_status)
      });

    }

  }


