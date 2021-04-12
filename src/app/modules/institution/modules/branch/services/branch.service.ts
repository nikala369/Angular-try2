import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { mainUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BranchService {
  constructor(private https: HttpClient) {}

  getBranches(): Observable<any> {
    return this.https.get<any>(`${mainUrl}/institutions/1/branches`);
  }
}
