import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StreamData } from './stream';
import { StreamService } from './stream.service';

@Component({
  templateUrl: './stream-details.component.html',
  styleUrls: ['./stream-details.component.css']
})
export class StreamDetailsComponent implements OnInit {
  pageTitle = 'Stream Detail';
  errorMessage = '';
  stream:StreamData | undefined;
  constructor(private route:ActivatedRoute,
    private streamService:StreamService) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.warn(id);
    if (id) {
      this.getStream(id);
    }

  }
  getStream(id: number): void {
    this.streamService.getPanel(id).subscribe((res:any)=>{
      this.stream = res;
      console.warn(this.stream)
    });
  }

}
