import { NgModule } from '@angular/core';
import { InstitutionRoutingModule } from './institution-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ShowComponent } from './components/showGrid/show.component';
import { InstitutionFormComponent } from './components/institution-form/institution-form.component';
import { InstitutionComponent } from './page/institution/institution.component';
import { BranchFormComponent } from './modules/branch/components/branch-form/branch-form.component';

@NgModule({
  declarations: [
    ShowComponent,
    InstitutionFormComponent,
    InstitutionComponent,
    BranchFormComponent,
  ],
  imports: [InstitutionRoutingModule, SharedModule],
})
export class InstitutionModule {}
