import { Component, OnInit } from '@angular/core';
import { InstitutionService } from '../../services/institution.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  institutionService: any;
  form: any;
  constructor(institutionService: InstitutionService) {}

  async ngOnInit(): Promise<void> {
    const userData = await this.institutionService.getUserById(/*some id*/);
    this.form.patchValue(userData);

    this.institutionService.formShare.subscribe((formValue: any) => {
      console.log(formValue);
      this.institutionService = formValue;
    });
  }
}
