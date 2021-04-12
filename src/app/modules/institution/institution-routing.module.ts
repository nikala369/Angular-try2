import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { InstitutionComponent } from './page/institution/institution.component';
import { AuthGuard } from '../sidebar/guard/sidebar.guard';
import { InstitutionFormComponent } from './components/institution-form/institution-form.component';

const routes: Routes = [
  {
    path: 'institutions',
    component: InstitutionComponent,
    canActivate: [AuthGuard],
  },
  { path: 'institutions/:state', component: InstitutionFormComponent },
  { path: 'institutions/:id/:state', component: InstitutionFormComponent },
  { path: 'institutions/:id/:state', component: InstitutionFormComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstitutionRoutingModule {}
