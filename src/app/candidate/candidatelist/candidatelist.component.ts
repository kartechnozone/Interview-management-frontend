import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { candidateData } from '../candidate';
import { CandidateService } from '../candidate.service';
@Component({
  templateUrl: './candidatelist.component.html',
  styleUrls: ['./candidatelist.component.css']
})
export class CandidatelistComponent implements OnInit, OnDestroy {
  pageTitle ='Candidate List'
  errorMessage = '';
  sub!: Subscription;

  private _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredCandidates = this.performFilter(value);
  }
  filteredCandidates: candidateData[] =[];
  candidates:candidateData[] =[];


  constructor(private candidateservice:CandidateService) { }

  performFilter(filterBy: string):candidateData[]{
    filterBy=filterBy.toLocaleLowerCase();
    return this.candidates.filter((candidate:candidateData)=> 
    candidate.name.toLocaleLowerCase().includes(filterBy));
  }

  ngOnInit(): void {
    this.sub = this.candidateservice.getCandidates().subscribe(
      (res: any) => {
       this.candidates = res;
       console.log(this.candidates);
       this.filteredCandidates = res;
     },
   );
  }
  ngOnDestroy(): void{
this.sub.unsubscribe();
  }

}
