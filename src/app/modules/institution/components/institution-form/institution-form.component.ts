import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InstitutionService } from '../../services/institution.service';
import {
  FormGroup,
  Validators,
  FormBuilder,
  FormControl,
} from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-institution-form',
  templateUrl: './institution-form.component.html',
  styleUrls: ['./institution-form.component.scss'],
})
export class InstitutionFormComponent implements OnInit {
  institutionFormTemplate: FormGroup;
  createInstitutions: any;
  intitutionName: any;
  institutionId!: number;

  showCreate = false;
  showEdit = false;
  show = false;

  constructor(
    public formBuilder: FormBuilder,
    public institutionService: InstitutionService,
    public router: Router,
    private route: ActivatedRoute
  ) {
    this.institutionFormTemplate = new FormGroup({
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
          this.institutionFormTemplate
            .get('identification')
            ?.patchValue(data.pid);
          this.institutionFormTemplate.get('name')?.patchValue(data.name);
          this.institutionFormTemplate.get('number')?.patchValue(data.number);
        }
      });
      this.showEdit;
      this.showCreate;
    } else if (state == 'create') {
      this.showCreate = true;
      this.showEdit = true;
    } else if (state == 'show') {
      let id = this.route.snapshot.params.id;
      this.institutionFormTemplate.value.disabled;

      this.institutionService.institutionSubject.subscribe((data: any) => {
        if (Object.keys(data).length > 0) {
          this.institutionFormTemplate
            .get('identification')
            ?.setValue(data.pid);
          this.institutionFormTemplate.get('name')?.setValue(data.name);
          this.institutionFormTemplate.get('number')?.setValue(data.number);
          this.intitutionName = data.name;
          this.institutionId = data.id;
        }
      });
      this.showCreate = false;
      this.showEdit = true;
      this.show = true;
    } else {
      console.log('oops');
    }
  }

  onCreate() {
    debugger;
    this.institutionService
      .createInstitution(this.institutionFormTemplate.value)
      .subscribe(
        (data: any) => {
          debugger;
          console.log(this.institutionFormTemplate.value);
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
    console.log(this.institutionFormTemplate.value);
    this.router.navigate(['/institutions']);
  }

  sendToBranchAdd() {
    this.router.navigate([
      '/institutions',
      this.institutionId,
      'branches',
      'create',
    ]);
  }

  // onChanges(): void {
  //   this.institutionFormTemplate.valueChanges.subscribe((val) => {
  //     this.formListener = this.institutionFormTemplate;
  //   });
  // }
}
