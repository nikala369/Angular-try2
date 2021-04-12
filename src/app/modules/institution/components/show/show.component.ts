import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BranchService } from '../../modules/branch/services/branch.service';
import { InstitutionService } from '../../services/institution.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss'],
})
export class ShowComponent implements OnInit {
  public gridBranchData: any[] = [];

  public showOptions: Array<string> = ['ნახვა', 'რედაქტირება'];

  constructor(
    public institutionService: InstitutionService,
    public branchService: BranchService,
    public router: Router
  ) {}

  ngOnInit() {
    this.branchService.getBranches().subscribe(
      (data: any) => {
        console.log(data);
        this.gridBranchData = data.data;
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
      this.institutionService.institutionSubject.next(dataItem);
      this.router.navigate(['/institutions', dataItem.id, 'edit']);
    } else if (item === 'ნახვა') {
      console.log(item, dataItem);
      this.institutionService.institutionSubject.next(dataItem);
      this.router.navigate(['/institutions', dataItem.id, 'show']);
    }
  }
}
