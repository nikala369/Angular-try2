import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './modules/auth/login/login.component';
import { UserComponent } from './modules/user/page/user/user.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: '',
    loadChildren: () =>
      import('./modules/institution/institution.module').then(
        (inst) => inst.InstitutionModule
      ),
  },
  { path: 'users', component: UserComponent },
  // {path: '**', component: PageNotFound}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
