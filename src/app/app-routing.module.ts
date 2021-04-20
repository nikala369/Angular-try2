import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './modules/auth/login/login.component';
import { AuthGuard } from './modules/sidebar/guard/sidebar.guard';
import { UserComponent } from './modules/user/page/user/user.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

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

  {
    path: '',
    loadChildren: () =>
      import('./modules/institution/modules/branch/branch.module').then(
        (branch) => branch.BranchModule
      ),
  },

  {
    path: '',
    loadChildren: () =>
      import(
        './modules/institution/modules/branch/modules/personal/personal.module'
      ).then((personal) => personal.PersonalModule),
  },

  { path: 'users', component: UserComponent, canActivate: [AuthGuard] }, // temporary
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
