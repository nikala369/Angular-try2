import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { InstitutionRoutingModule } from './institution-routing.module';

@NgModule({
  declarations: [CreateComponent, EditComponent],
  imports: [CommonModule, InstitutionRoutingModule],
})
export class InstitutionModule {}
