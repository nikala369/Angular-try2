import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './modules/auth/login/login.component';
import { CreateComponent } from './modules/institution/components/create/create.component';
import { AuthGuard } from './modules/sidebar/guard/sidebar.guard';
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

  { path: 'users', component: UserComponent, canActivate: [AuthGuard] }, // temporary
  // {path: '**', component: PageNotFound}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
