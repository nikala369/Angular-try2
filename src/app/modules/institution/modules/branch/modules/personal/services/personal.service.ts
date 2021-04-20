import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { mainUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PersonalService {
  constructor(private https: HttpClient) {}

  public personalSubject = new BehaviorSubject({});

  createPersonal(
    personalData: any,
    institutionsId: any,
    branchId: any
  ): Observable<any> {
    return this.https.post<any>(
      `${mainUrl}/institutions/${institutionsId}/branches/${branchId}/personal/create`,
      personalData
    );
  }
}
