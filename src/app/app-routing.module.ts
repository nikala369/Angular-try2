import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './modules/auth/login/login.component';
import { InstitutionComponent } from './modules/institution/page/institution/institution.component';
import { UserComponent } from './modules/user/page/user/user.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'institution', component: InstitutionComponent },
  { path: 'users', component: UserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
