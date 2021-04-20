import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PersonalFormComponent } from './modules/personal/components/personal-form/personal-form.component';

const routes: Routes = [
  {
    path: 'institutions/:institutionsId/branches/:branchId/personal/:state',
    component: PersonalFormComponent,
  },
  {
    path:
      'institutions/:institutionsId/branches/:branchId/personal/:personId/:state',
    component: PersonalFormComponent,
  },

  {
    path:
      'institutions/:isntitutionsId/branches/:branchId/personal/:personId/:state',
    component: PersonalFormComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BranchRoutingModule {}
