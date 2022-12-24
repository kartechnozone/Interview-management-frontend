import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CandidateModule } from './candidate/candidate.module';
import { CandidatelistComponent } from './candidate/candidatelist/candidatelist.component';
import { SharedModule } from './shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PanelModule } from './panel/panel.module';
import { StreamModule } from './stream/stream.module';



@NgModule({
  declarations: [
    AppComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'candidate', component: CandidatelistComponent },
      { path: '', redirectTo: 'candidate', pathMatch: 'full' },
      { path: '**', redirectTo: 'candidate', pathMatch: 'full' }
    ]),
    CandidateModule,
    SharedModule,
    NgbModule,
    PanelModule,
    StreamModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
