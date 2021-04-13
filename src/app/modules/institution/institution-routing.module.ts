import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { InstitutionComponent } from './page/institution/institution.component';
import { AuthGuard } from '../sidebar/guard/sidebar.guard';
import { InstitutionFormComponent } from './components/institution-form/institution-form.component';
import { CreateComponent } from './modules/branch/components/create/create.component';
import { EditComponent } from './modules/branch/components/edit/edit.component';
import { ShowComponent } from './modules/branch/components/show/show.component';

const routes: Routes = [
  {
    path: 'institutions',
    component: InstitutionComponent,
    canActivate: [AuthGuard],
  },
  { path: 'institutions/:state', component: InstitutionFormComponent },
  { path: 'institutions/:id/:state', component: InstitutionFormComponent },
  { path: 'institutions/:id/:state', component: InstitutionFormComponent },

  { path: 'institutions/:id/branches/create', component: CreateComponent },
  { path: 'institutions/:id/branches/:id/edit', component: EditComponent },
  { path: 'institutions/:id/branches/:id/show', component: ShowComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstitutionRoutingModule {}
