import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { StreamData } from './stream';
import { StreamService } from './stream.service';

@Component({
  templateUrl: './stream-list.component.html',
  styleUrls: ['./stream-list.component.css']
})
export class StreamListComponent implements OnInit,OnDestroy {
  pageTitle ='Streams List'
  errorMessage = '';
  sub!: Subscription;
 

  private _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredStreams= this.performFilter(value);
  }
  filteredStreams: StreamData[] =[];
  streams:StreamData[] =[];


  constructor(private streamService: StreamService) { }

  performFilter(filterBy: string):StreamData[]{
    filterBy=filterBy.toLocaleLowerCase();
    return this.streams.filter((stream:StreamData)=> 
    stream.name.toLocaleLowerCase().includes(filterBy));
  }

  ngOnInit(): void {
    this.sub = this.streamService.getpanels().subscribe(
      (res: any) => {
       this.streams = res;
       console.log(this.streams);
       this.filteredStreams = res;
     },
   );
  }

  ngOnDestroy():void{
    this.sub.unsubscribe();
  }

}
