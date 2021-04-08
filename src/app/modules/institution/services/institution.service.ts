import { Injectable } from '@angular/core';
// import { EventsServ, BranchServ, PersonalServ } from './../events';
import { HttpClient } from '@angular/common/http';
import { mainUrl } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InstitutionService {
  public branchSubject = new BehaviorSubject({});

  constructor(private https: HttpClient) {}

  searchInstitutions(searchData: any): Observable<any> {
    let page = 1;
    return this.https.get<any>(
      `${mainUrl}/institutions?page=${page}&name=${searchData.name}&pid=${searchData.identification}`,
      searchData
    );
  }

  getInstitutionsAll(): Observable<any> {
    return this.https.get<any>(`${mainUrl}/institutions`);
  }
}
