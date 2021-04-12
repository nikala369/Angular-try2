import { Component, OnInit } from '@angular/core';
import { InstitutionService } from '../../services/institution.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss'],
})
export class ShowComponent implements OnInit {
  constructor(institutionService: InstitutionService) {}

  ngOnInit() {}
}
