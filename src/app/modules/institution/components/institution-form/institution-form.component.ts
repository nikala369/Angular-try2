import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { InstitutionService } from '../../services/institution.service';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-institution-form',
  templateUrl: './institution-form.component.html',
  styleUrls: ['./institution-form.component.scss'],
})
export class InstitutionFormComponent implements OnInit {
  institutionFormTemplate: FormGroup;
  constructor(
    public formBuilder: FormBuilder,
    public institutionService: InstitutionService,
    public router: Router
  ) {
    this.institutionFormTemplate = this.formBuilder.group({
      identification: ['', Validators.required],
      name: ['', Validators.required],
      number: [, Validators.required],
    });
  }

  ngOnInit(): void {
    this.institutionService.institutionFormData(
      this.institutionFormTemplate.value
    );

    this.institutionFormTemplate.valueChanges.subscribe((value: any) => {
      console.log(JSON.stringify(value));
    });
  }

  // onChanges(): void {
  //   this.institutionFormTemplate.valueChanges.subscribe((val) => {
  //     this.formListener = this.institutionFormTemplate;
  //   });
  // }
}
