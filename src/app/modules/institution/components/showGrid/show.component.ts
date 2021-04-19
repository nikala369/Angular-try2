import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BranchService } from '../../modules/branch/services/branch.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss'],
})
export class ShowComponent implements OnInit {
  public gridBranchData: any[] = [];
  institutionId: any;

  public showOptions: Array<string> = ['ნახვა', 'რედაქტირება'];

  constructor(
    public branchService: BranchService,
    public router: Router,
    public route: ActivatedRoute
  ) {}

  ngOnInit() {
    debugger
    let id = this.route.snapshot.params.id;
    this.institutionId = id;
    this.branchService.getBranches(id).subscribe(
      (data) => {
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
      this.branchService.branchSubject.next(dataItem);
      this.router.navigate([
        '/institutions',
        this.institutionId,
        'branches',
        dataItem.id,
        'edit',
      ]);
    } else if (item === 'ნახვა') {
      console.log(item, dataItem);
      this.branchService.branchSubject.next(dataItem);
      this.router.navigate([
        '/institutions',
        this.institutionId,
        'branches',
        dataItem.id,
        'show',
      ]);
    }
  }
}
