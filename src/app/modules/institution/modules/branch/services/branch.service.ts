import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { mainUrl } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class BranchService {
  branchId!: number;
  institutionsId!: number;

  constructor(private https: HttpClient, public route: ActivatedRoute) {}

  public branchSubject = new BehaviorSubject({});

  // needs interfaces
  getBranches(id: any): Observable<any> {
    this.institutionsId = id;
    return this.https.get<any>(`${mainUrl}/institutions/${id}/branches`);
  }

  // needs interfaces
  createBranch(branchData: any): Observable<any> {
    return this.https.post<any>(
      `${mainUrl}/institutions/${this.institutionsId}/branches/create`,
      branchData
    );
  }
}
