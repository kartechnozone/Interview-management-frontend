import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CandidateService } from '../candidate/candidate.service';
import { PanelData, panelStatus } from '../panel/panel';
import { PanelService } from '../panel/panel.service';

@Component({
  templateUrl: './panel-details.component.html',
  styleUrls: ['./panel-details.component.css']
})
export class PanelDetailsComponent implements OnInit {
  pageTitle = 'PanelMember Detail';
  errorMessage = '';
  panel:PanelData | undefined;
  panel_status: panelStatus[]=[];

  


  constructor(private route:ActivatedRoute,
    private panelService:PanelService) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.warn(id);
    if (id) {
      this.getPanel(id);
      this.getPanelStatus(id);
    }
  }
    getPanel(id: number): void {
      this.panelService.getPanel(id).subscribe((res:any)=>{
        this.panel = res;
        console.warn(this.panel)
      });
  
    }
  
      getPanelStatus(id: number): void {
        this.panelService.getPanelStatus(id).subscribe((res:any)=>{
          this.panel_status = res;
          console.warn(this.panel_status)
        });
  
      }

  }


