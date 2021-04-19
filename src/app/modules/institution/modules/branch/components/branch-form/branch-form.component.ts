import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InstitutionService } from 'src/app/modules/institution/services/institution.service';
import {
  FormGroup,
  Validators,
  FormBuilder,
  FormControl,
} from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { BranchService } from '../../services/branch.service';

@Component({
  selector: 'app-branch-form',
  templateUrl: './branch-form.component.html',
  styleUrls: ['./branch-form.component.scss'],
})
export class BranchFormComponent implements OnInit {
  branchFormTemplate: FormGroup;
  institutionName!: string;
  branchId!: number;
  instId!: number;

  showCreate: boolean = false;
  showEdit: boolean = false;
  show: boolean = false;
  isDisabled: boolean = false;
  createBranch: any;

  constructor(
    public institutionService: InstitutionService,
    public branchService: BranchService,
    public formBuilder: FormBuilder,
    public route: ActivatedRoute,
    public router: Router
  ) {
    this.branchFormTemplate = new FormGroup({
      address: new FormControl('', Validators.required),
      manager_name: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    let state = this.route.snapshot.params.state;

    let id = this.route.snapshot.params.branchId;
    let id2 = this.route.snapshot.params.institutionsId;
    this.branchId = id;
    this.instId = id2;

    debugger;
    if (state == 'edit') {
      this.institutionService.institutionSubject.subscribe((data: any) => {
        if (Object.keys(data).length > 0) {
          this.institutionName = data.name;
        }
      });

      this.branchService.branchSubject.subscribe((data: any) => {
        if (Object.keys(data).length > 0) {
          this.branchFormTemplate.get('address')?.patchValue(data.address);
          this.branchFormTemplate
            .get('manager_name')
            ?.patchValue(data.manager_name);
        }
      });
      this.showEdit = true;
    } else if (state == 'create') {
      this.institutionService.institutionSubject.subscribe((data: any) => {
        if (Object.keys(data).length > 0) {
          this.institutionName = data.name;
        }
      });

      this.showCreate = true;
    } else if (state == 'show') {
      this.institutionService.institutionSubject.subscribe((data: any) => {
        if (Object.keys(data).length > 0) {
          this.institutionName = data.name;
        }
      });

      this.branchService.branchSubject.subscribe((data: any) => {
        if (Object.keys(data).length > 0) {
          this.branchFormTemplate.disabled;
          this.branchFormTemplate.get('address')?.setValue(data.address);
          this.branchFormTemplate
            .get('manager_name')
            ?.setValue(data.manager_name);
        }
      });
      this.showCreate = false;
      this.showEdit = false;
      this.show = true;
      this.isDisabled = true;
    } else {
      console.log('oops');
    }
  }

  onCreate() {
    this.branchService.createBranch(this.branchFormTemplate.value).subscribe(
      (data: any) => {
        console.log(this.branchFormTemplate.value);
        this.router.navigate(['/institutions']);
        this.createBranch = data;
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

  onEdit() {
    console.log(this.branchFormTemplate.value);
    this.branchService
      .updateBranch(this.branchFormTemplate.value, this.branchId, this.instId)
      .subscribe(
        (data: any) => {
          console.log(this.branchFormTemplate.value);
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

  sendToPersonAdd() {
    this.router.navigate([
      '/institutions',
      this.instId,
      'branches',
      this.branchId,
      'personal',
      'create',
    ]);
  }
}
