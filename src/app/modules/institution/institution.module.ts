import { NgModule } from '@angular/core';
import { InstitutionRoutingModule } from './institution-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ShowComponent } from './components/show/show.component';
import { InstitutionFormComponent } from './components/institution-form/institution-form.component';

@NgModule({
  declarations: [ShowComponent, InstitutionFormComponent],
  imports: [InstitutionRoutingModule, SharedModule],
})
export class InstitutionModule {}
