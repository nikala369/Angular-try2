import { NgModule } from '@angular/core';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { InstitutionRoutingModule } from './institution-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ShowComponent } from './components/show/show.component';
import { InstitutionFormComponent } from './components/institution-form/institution-form.component';

@NgModule({
  declarations: [
    CreateComponent,
    EditComponent,
    ShowComponent,
    InstitutionFormComponent,
  ],
  imports: [InstitutionRoutingModule, SharedModule],
})
export class InstitutionModule {}
