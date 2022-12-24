import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { PanelData, panelStatus } from './panel';

@Injectable({
  providedIn: 'root'
})
export class PanelService {

  private url ="/api/panelmember";
private pidurl = "/api/panelmember";
private pidsurl = "/api/panelmember"
  constructor(private http: HttpClient) { }

  getpanels(): Observable<PanelData[]>{
    return this.http.get<PanelData[]>(this.url).pipe(tap(data=> console.log('All: ',JSON.stringify(data))),catchError(this.handleError));
  }

  getPanel(id:number): Observable<PanelData[] | undefined>{
    this.pidurl = "/api/panelmember/" + id;
    return this.http.get<PanelData[]>(this.pidurl).pipe(tap(data=> console.log('All: ',JSON.stringify(data))),catchError(this.handleError));
  }

  getPanelStatus(id:number):Observable<panelStatus[] | undefined>{
    this.pidsurl = "/api/panelmember/" + id + "/status";
    // console.log(this.http.get<candidateStatus[]>(this.surl));
    return this.http.get<[]>(this.pidsurl).pipe(tap(data=> console.log('All: ',JSON.stringify(data))),catchError(this.handleError));
  }

  // getCandidate(id:number): Observable<candidateDetail[] | undefined>{
  //   this.nurl = "/api/candidate/" + id;
  //   return this.http.get<candidateDetail[]>(this.nurl).pipe(tap(data=> console.log('All: ',JSON.stringify(data))),catchError(this.handleError));
  // }

  private handleError(err: HttpErrorResponse): Observable<never> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
