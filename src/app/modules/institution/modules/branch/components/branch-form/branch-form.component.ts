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

@Component({
  selector: 'app-branch-form',
  templateUrl: './branch-form.component.html',
  styleUrls: ['./branch-form.component.scss'],
})
export class BranchFormComponent implements OnInit {
  branchFormTemplate: FormGroup;
  createInstitutions: any;
  intitutionName: any;
  institutionId!: number;

  showCreate: boolean = false;
  showEdit: boolean = false;
  show: boolean = false;
  isDisabled: boolean = false;
  instName: any;

  constructor(
    public institutionService: InstitutionService,
    public formBuilder: FormBuilder,
    public route: ActivatedRoute,
    public router: Router
  ) {
    this.branchFormTemplate = new FormGroup({
      identification: new FormControl(''),
      name: new FormControl('', Validators.required),
      number: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    let state = this.route.snapshot.params.state;

    if (state == 'edit') {
      this.institutionService.institutionSubject.subscribe((data: any) => {
        if (Object.keys(data).length > 0) {
          this.branchFormTemplate.get('address')?.patchValue(data.pid);
          this.branchFormTemplate.get('manager_name')?.patchValue(data.name);
        }
      });
      this.showEdit;
      this.showCreate;
      this.instName = this.intitutionName;
    } else if (state == 'create') {
      this.showCreate = true;
      this.showEdit = true;
      this.instName = this.intitutionName;
    } else if (state == 'show') {
      let id = this.route.snapshot.params.id;
      this.institutionId = id;

      this.institutionService.institutionSubject.subscribe((data: any) => {
        if (Object.keys(data).length > 0) {
          this.branchFormTemplate.disabled;
          this.branchFormTemplate.get('address')?.setValue(data.pid);
          this.branchFormTemplate.get('manager_name')?.setValue(data.name);
          this.intitutionName = data.name;
        }
      });
      this.showCreate = false;
      this.showEdit = true;
      this.show = true;
      this.isDisabled = true;
    } else {
      console.log('oops');
    }
  }

  onCreate() {
    this.institutionService
      .createInstitution(this.branchFormTemplate.value)
      .subscribe(
        (data: any) => {
          console.log(this.branchFormTemplate.value);
          this.router.navigate(['/institutions']);
          this.createInstitutions = data;
          console.log(data);
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
    this.router.navigate(['/institutions']);
  }

  sendToPersonAdd() {
    this.router.navigate([
      '/institutions',
      this.institutionId,
      'branches',
      1,
      'personal',
      'create',
    ]);
  }
}
