import { Injectable } from '@angular/core';
// import { EventsServ, BranchServ, PersonalServ } from './../events';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { mainUrl } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';
import { GetInstitutions, SearchInstitutions } from './institutions-interface';
import { throwError, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class InstitutionService {
  public branchSubject = new BehaviorSubject({});

  constructor(private https: HttpClient) {}

  //observable error
  searchInstitutions(searchData: any): Observable<any> {
    let page = 1;
    return this.https
      .get<SearchInstitutions[]>(
        `${mainUrl}/institutions?page=${page}&name=${searchData.name}&pid=${searchData.identification}`,
        searchData
      )
      .pipe(catchError(this.errorHandler));
  }

  // observable error
  getInstitutionsAll(): Observable<any> {
    return this.https
      .get<GetInstitutions[]>(`${mainUrl}/institutions`)
      .pipe(catchError(this.errorHandler));
  }

  
  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'Server Error');
  }
}
