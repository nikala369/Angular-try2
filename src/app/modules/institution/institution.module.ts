import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstitutionComponent } from './page/institution/institution.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { InstitutionRoutingModule } from './institution-routing.module';

@NgModule({
  declarations: [InstitutionComponent, CreateComponent, EditComponent],
  imports: [CommonModule, InstitutionRoutingModule],
})
export class InstitutionModule {}
