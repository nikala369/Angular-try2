import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InstitutionService } from 'src/app/modules/institution/services/institution.service';
import { BranchService } from '../../services/branch.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss'],
})
export class ShowComponent implements OnInit {
  gridPersonData: any;

  public showOptions: Array<string> = ['ნახვა', 'რედაქტირება'];

  institutionsId: any;
  branchId: any;

  constructor(
    public route: ActivatedRoute,
    public branchService: BranchService,
    public router: Router,
    public institutionService: InstitutionService
  ) {}

  ngOnInit() {
    this.institutionsId = this.route.snapshot.params.institutionsId;
    this.branchId = this.route.snapshot.params.branchId;

    this.branchService.getPerson(this.institutionsId, this.branchId).subscribe(
      (data: any) => {
        this.gridPersonData = data.data;
        console.log('person', data.data);
      },
      (err: any) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            console.log(err);
          }
        }
      }
    );
  }

  onItemClick(item: any, dataItem: any) {
    if (item === 'რედაქტირება') {
      console.log(item, dataItem);
      this.branchService.branchSubject.next(dataItem);
      this.router.navigate([
        '/institutions',
        this.institutionsId,
        'branches',
        this.branchId,
        'personal',
        dataItem.id,
        'edit',
      ]);
    } else if (item === 'ნახვა') {
      console.log(item, dataItem);
      this.branchService.branchSubject.next(dataItem);
      this.router.navigate([
        '/institutions',
        this.institutionsId,
        'branches',
        this.branchId,
        'personal',
        dataItem.id,
        'show',
      ]);
    }
  }
}
