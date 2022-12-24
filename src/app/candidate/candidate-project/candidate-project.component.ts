import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { projectData } from '../candidate';
import { CandidateService } from '../candidate.service';

@Component({
  templateUrl: './candidate-project.component.html',
  styleUrls: ['./candidate-project.component.css']
})
export class CandidateProjectComponent implements OnInit,OnDestroy {
  pageTitle = 'Project List'
  errorMessage = '';
  sub!: Subscription;

  private _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProjects = this.performFilter(value);
  }

  filteredProjects: projectData[] = []
  projects: projectData[]=[]
  constructor(private candidateservice:CandidateService) { }


  performFilter(filterBy: string):projectData[]{
    filterBy=filterBy.toLocaleLowerCase();
    return this.projects.filter((candidate:projectData)=> 
    candidate.name.toLocaleLowerCase().includes(filterBy));
  }
  ngOnInit(): void {
    this.sub = this.candidateservice.getProjects().subscribe(
      (res:any)=> {
        this.projects = res;
        console.log(this.projects);
        this.filteredProjects = res;
      }
    )

  }

  ngOnDestroy(): void {
this.sub.unsubscribe();
  }

}
