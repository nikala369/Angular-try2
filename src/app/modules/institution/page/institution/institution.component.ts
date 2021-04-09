import { Router } from '@angular/router';
// import { DataService } from './../../../../Services/data.service';
// import { EventService } from '../../../../Services/event.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { InstitutionService } from '../../services/institution.service';

@Component({
  selector: 'app-institution',
  templateUrl: './institution.component.html',
  styleUrls: ['./institution.component.scss'],
})
export class InstitutionComponent implements OnInit {
  public myFormInstitution: FormGroup;

  institutions: any;
  public gridData: any[] = [];

  public showOptions: Array<string> = ['რედაქტირება', 'ნახვა'];

  constructor(
    // public eventsService: EventService,
    // public dataService: DataService,
    public institutionService: InstitutionService,
    public router: Router
  ) {
    this.myFormInstitution = new FormGroup({
      name: new FormControl('', Validators.required),
      identification: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    this.institutionService.getInstitutionsAll().subscribe((data) => {
      this.gridData = data.data;
      this.institutions = data.data;
      console.log(data.data);
    });
  }

  onSubmit() {
    if (this.myFormInstitution.status == 'INVALID') {
      alert('ფორმა არ არის ვალიდური');
    } else {
      this.institutionService
        .searchInstitutions(this.myFormInstitution.value)
        .subscribe(
          (data: any) => {
            console.log(data.data);
            this.institutions = data.data;
            this.gridData = data.data;
          },
          (err: { status: number }) => {
            if (err instanceof HttpErrorResponse) {
              if (err.status === 401) {
                console.log(err);
              }
            }
          }
        );
    }
  }

  onItemClick(item: any, dataItem: any) {
    if (item === 'რედაქტირება') {
      console.log(item, dataItem);
      this.institutionService.branchSubject.next(dataItem);
      this.router.navigate(['/institutions', dataItem.id, 'edit']);
    } else if (item === 'ნახვა') {
      console.log(item, dataItem);
      this.institutionService.branchSubject.next(dataItem);
      this.router.navigate(['/institutions', dataItem.id, 'created']);
    }
  }
}
