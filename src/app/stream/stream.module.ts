import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StreamListComponent } from './stream-list.component';
import { StreamDetailsComponent } from './stream-details.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    StreamListComponent,
    StreamDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'stream',component:StreamListComponent},
      {path:'stream/:id', component:StreamDetailsComponent},
    ]),
    SharedModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ]
})
export class StreamModule { }
