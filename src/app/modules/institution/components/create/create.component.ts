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
    
  }

  
}

