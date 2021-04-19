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

  institutionId: any;
  branchId: any;

  constructor(
    public route: ActivatedRoute,
    public branchService: BranchService,
    public router: Router,
    public institutionService: InstitutionService
  ) {}

  ngOnInit() {
    let idInstitution = this.route.snapshot.params.isntitutionsId;
    let idBranch = this.route.snapshot.params.branchId;
    this.branchId = idBranch;
    this.institutionId = idInstitution;
    this.branchService.getPerson(this.institutionId, this.branchId).subscribe(
      (data: any) => {
        this.gridPersonData = data;
        debugger;
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
}
