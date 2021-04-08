import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { InstitutionComponent } from './page/institution/institution.component';
import { AuthGuard } from '../sidebar/guard/sidebar.guard';

const routes: Routes = [
  { path: '', component: InstitutionComponent, canActivate: [AuthGuard] },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstitutionRoutingModule {}
