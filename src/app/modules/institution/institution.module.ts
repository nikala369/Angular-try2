import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstitutionComponent } from './page/institution/institution.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';

@NgModule({
  declarations: [InstitutionComponent, CreateComponent, EditComponent],
  imports: [CommonModule],
})
export class InstitutionModule {}
