import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelListComponent } from './panel-list.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PanelDetailsComponent } from '../panel-details/panel-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    PanelListComponent,
    PanelDetailsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'panelmember',component:PanelListComponent},
      {path:'panelmember/:id', component:PanelDetailsComponent},
    ]),
    SharedModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ]
})
export class PanelModule { }
