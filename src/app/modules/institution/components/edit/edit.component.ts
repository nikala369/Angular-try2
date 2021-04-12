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

  ngOnInit() {
  }

  saveButton() {}
}
