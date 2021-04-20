import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonalService } from '../../services/personal.service';
import {
  FormGroup,
  Validators,
  FormBuilder,
  FormControl,
} from '@angular/forms';
import { InstitutionService } from 'src/app/modules/institution/services/institution.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-personal-form',
  templateUrl: './personal-form.component.html',
  styleUrls: ['./personal-form.component.scss'],
})
export class PersonalFormComponent implements OnInit {
  personalFormTemplate: FormGroup;
  institutionName!: string;
  branchId!: number;
  instId!: number;

  showCreate: boolean = false;
  showEdit: boolean = false;
  show: boolean = false;
  isDisabled: boolean = false;
  createBranch: any;

  constructor(
    public personalService: PersonalService,
    public formBuilder: FormBuilder,
    public router: Router,
    public route: ActivatedRoute,
    public institutionService: InstitutionService
  ) {
    this.personalFormTemplate = new FormGroup({
      pid: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    let state = this.route.snapshot.params.state;

    let id = this.route.snapshot.params.branchId;
    let id2 = this.route.snapshot.params.institutionsId;
    this.branchId = id;
    this.instId = id2;

    if (state == 'edit') {
      this.institutionService.institutionSubject.subscribe((data: any) => {
        if (Object.keys(data).length > 0) {
          this.institutionName = data.name;
        }
      });

      this.personalService.personalSubject.subscribe((data: any) => {
        if (Object.keys(data).length > 0) {
          this.personalFormTemplate.get('pid')?.patchValue(data.pid);
          this.personalFormTemplate.get('name')?.patchValue(data.name);
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

      this.personalService.personalSubject.subscribe((data: any) => {
        if (Object.keys(data).length > 0) {
          this.personalFormTemplate.disabled;
          this.personalFormTemplate.get('pid')?.setValue(data.pid);
          this.personalFormTemplate.get('name')?.setValue(data.name);
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
    this.personalService
      .createPersonal(
        this.personalFormTemplate.value,
        this.instId,
        this.branchId
      )
      .subscribe(
        (data: any) => {
          console.log(this.personalFormTemplate.value);
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
    console.log(this.personalFormTemplate.value);
    // this.personalService
    //   .updatePersonal(
    //     this.personalFormTemplate.value,
    //     this.branchId,
    //     this.instId
    //   )
    //   .subscribe(
    //     (data: any) => {
    //       console.log(this.personalFormTemplate.value);
    //     },
    //     (err: { status: number }) => {
    //       if (err instanceof HttpErrorResponse) {
    //         if (err.status === 401) {
    //           console.log(err);
    //         }
    //       }
    //     }
    //   );
  }
}
