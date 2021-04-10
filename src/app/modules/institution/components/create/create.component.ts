import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InstitutionService } from '../../services/institution.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  createInstitutions: any;

  constructor(
    public router: Router,
    public institutionService: InstitutionService
  ) {}
  institutionFormData: any;

  ngOnInit(): void {
    this.institutionService.formShare.subscribe((formValue) => {
      console.log(formValue);
      this.institutionFormData = formValue;
    });
  }

  onSubmit() {
    this.institutionService
      .createInstitution(this.institutionFormData)
      .subscribe(
        (data: any) => {
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
}
