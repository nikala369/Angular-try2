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
  formListener: any;
  constructor(
    public formBuilder: FormBuilder,
    public institutionService: InstitutionService,
    public router: Router
  ) {
    this.institutionFormTemplate = new FormGroup({
      identification: new FormControl(''),
      name: new FormControl('', Validators.required),
      number: new FormControl('', Validators.required),
    });
  }

  institutionFormTemplate = this.formBuilder.group({
    identification: [''],
    name: [''],
    number: [],
  });

  ngOnInit(): void {
    this.institutionService.institutionFormData(
      this.institutionFormTemplate.value
      );
    // this.onChanges();
  }
  // onChanges(): void {
  //   this.institutionFormTemplate.valueChanges.subscribe((val) => {
  //     this.formListener = this.institutionFormTemplate;
  //   });
  // }
}
