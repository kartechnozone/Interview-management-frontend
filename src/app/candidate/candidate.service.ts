import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http"
import { Observable ,throwError} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { candidateData, candidateDetail, candidateStatus, projectCandidate, projectData } from './candidate';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {
private Url = "/api/candidate";
private nurl = "/api/candidate";
private surl = "/api/candidate";
private purl = "/api/project";
private pidurl = "/api/project";
private pidcurl = "/api/project";


  constructor(private http: HttpClient) { }

  getCandidates(): Observable<candidateData[]>{
    return this.http.get<candidateData[]>(this.Url).pipe(tap(data=> console.log('All: ',JSON.stringify(data))),catchError(this.handleError));
  }

  getCandidate(id:number): Observable<candidateDetail[] | undefined>{
    this.nurl = "/api/candidate/" + id;
    return this.http.get<candidateDetail[]>(this.nurl).pipe(tap(data=> console.log('All: ',JSON.stringify(data))),catchError(this.handleError));
  }

  getCandidateStatus(id:number):Observable<candidateStatus[] | undefined>{
    this.surl = "/api/candidate/" + id + "/status";
    // console.log(this.http.get<candidateStatus[]>(this.surl));
    return this.http.get<candidateStatus[]>(this.surl).pipe(tap(data=> console.log('All: ',JSON.stringify(data))),catchError(this.handleError));

  }


  getProjects(): Observable<projectData[]>{
    return this.http.get<projectData[]>(this.purl).pipe(tap(data=> console.log('All: ',JSON.stringify(data))),catchError(this.handleError));
  }

  getProject(id:number): Observable<projectData[] | undefined>{
    this.pidurl = "/api/project/" + id;
    return this.http.get<projectData[]>(this.pidurl).pipe(tap(data=> console.log('All: ',JSON.stringify(data))),catchError(this.handleError));
  }

  getProjectCandidate(id:number):Observable<projectCandidate[] | undefined>{
    this.pidcurl = "/api/project/" + id + "/candidate";
    // console.log(this.http.get<candidateStatus[]>(this.surl));
    return this.http.get<projectCandidate[]>(this.pidcurl).pipe(tap(data=> console.log('All: ',JSON.stringify(data))),catchError(this.handleError));

  }

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
