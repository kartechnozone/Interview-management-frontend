import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidatelistComponent } from './candidatelist/candidatelist.component';
import { CandidateDetailsComponent } from './candidate-details/candidate-details.component';
import { CandidateAddComponent } from './candidate-add/candidate-add.component';
import { CandidateStatusComponent } from './candidate-status/candidate-status.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CandidateProjectComponent } from './candidate-project/candidate-project.component';
import { CandidateProjectDetailsComponent } from './candidate-project-details/candidate-project-details.component';
import { SharedModule } from '../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    CandidatelistComponent,
    CandidateDetailsComponent,
    CandidateAddComponent,
    CandidateStatusComponent,
    CandidateProjectComponent,
    CandidateProjectDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'candidate',component:CandidatelistComponent},
      {path:'candidate/:id', component:CandidateDetailsComponent},
      {path: 'project',component:CandidateProjectComponent},
      {path:'project/:id', component:CandidateProjectDetailsComponent}
    ]),
    SharedModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ]
})
export class CandidateModule { }
