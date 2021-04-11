import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { InstitutionComponent } from './page/institution/institution.component';
import { AuthGuard } from '../sidebar/guard/sidebar.guard';
import { CreateComponent } from './components/create/create.component';

const routes: Routes = [
  {
    path: 'institution',
    component: InstitutionComponent,
    canActivate: [AuthGuard],
  },
  { path: 'institution/create', component: CreateComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstitutionRoutingModule {}
