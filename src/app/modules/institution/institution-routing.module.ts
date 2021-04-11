import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { InstitutionComponent } from './page/institution/institution.component';
import { AuthGuard } from '../sidebar/guard/sidebar.guard';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { ShowComponent } from './components/show/show.component';

const routes: Routes = [
  {
    path: 'institutions',
    component: InstitutionComponent,
    canActivate: [AuthGuard],
  },
  { path: 'institutions/create', component: CreateComponent },
  { path: 'institutions/:id/edit', component: EditComponent },
  { path: 'institutions/:id', component: ShowComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstitutionRoutingModule {}
