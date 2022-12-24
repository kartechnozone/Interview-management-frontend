import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PanelData } from './panel';
import { PanelService } from './panel.service';

@Component({
  templateUrl: './panel-list.component.html',
  styleUrls: ['./panel-list.component.css']
})
export class PanelListComponent implements OnInit,OnDestroy {
  pageTitle ='Panelmember List'
  errorMessage = '';
  sub!: Subscription;
 

  private _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredPanels= this.performFilter(value);
  }
  filteredPanels: PanelData[] =[];
  panels:PanelData[] =[];


  constructor(private panelService:PanelService) { }

  performFilter(filterBy: string):PanelData[]{
    filterBy=filterBy.toLocaleLowerCase();
    return this.panels.filter((panel:PanelData)=> 
    panel.name.toLocaleLowerCase().includes(filterBy));
  }
  ngOnInit(): void {
    this.sub = this.panelService.getpanels().subscribe(
      (res: any) => {
       this.panels = res;
       console.log(this.panels);
       this.filteredPanels = res;
     },
   );
  }
  ngOnDestroy():void{
this.sub.unsubscribe();
  }

}
