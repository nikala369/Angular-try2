import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { InstitutionComponent } from './page/institution/institution.component';
import { AuthGuard } from '../sidebar/guard/sidebar.guard';
import { InstitutionFormComponent } from './components/institution-form/institution-form.component';
import { BranchFormComponent } from './modules/branch/components/branch-form/branch-form.component';

const routes: Routes = [
  {
    path: 'institutions',
    component: InstitutionComponent,
    canActivate: [AuthGuard],
  },
  { path: 'institutions/:state', component: InstitutionFormComponent },
  { path: 'institutions/:id/:state', component: InstitutionFormComponent },
  { path: 'institutions/:id/:state', component: InstitutionFormComponent },

  { path: 'institutions/:id/branches/:state', component: BranchFormComponent },
  {
    path: 'institutions/:institutionsId/branches/:branchId/:state',
    component: BranchFormComponent,
  },
  {
    path: 'institutions/:isntitutionsId/branches/:branchId/:state',
    component: BranchFormComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstitutionRoutingModule {}
