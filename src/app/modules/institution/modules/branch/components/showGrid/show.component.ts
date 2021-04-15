import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InstitutionService } from 'src/app/modules/institution/services/institution.service';
import { BranchService } from '../../services/branch.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss'],
})
export class ShowComponent implements OnInit {
  gridPersonData: any;
  institutionId: any;

  constructor(
    public route: ActivatedRoute,
    public branchService: BranchService,
    public institutionService: InstitutionService
  ) {}

  ngOnInit() {
    let id = this.route.snapshot.params.isntitutionsId;
    this.institutionId = id;
    debugger;
    this.institutionService.getOneInst().subscribe(
      (data: any) => {
        console.log(data);
        this.gridPersonData = data.personal;
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
