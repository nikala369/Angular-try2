import { Component, OnInit } from '@angular/core';
import { InstitutionService } from '../../services/institution.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss'],
})
export class ShowComponent implements OnInit {
  institutionService: any;
  form: any;
  constructor(institutionService: InstitutionService) {}

  async ngOnInit(): Promise<void> {
    const userData = await this.institutionService.getUserById(/*some id*/);
    this.form.setValue(userData);

    this.institutionService.formShare.subscribe((formValue: any) => {
      console.log(formValue);
      this.institutionService = formValue;
    });
  }
}
