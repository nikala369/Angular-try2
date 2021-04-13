import { Component, OnInit } from '@angular/core';
import { AuthGuard } from './guard/sidebar.guard';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  providers: [AuthGuard],
})
export class SidebarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
