import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { PersonalFormComponent } from './components/personal-form/personal-form.component';
import { PersonalComponent } from './page/personal/personal.component';



@NgModule({
  declarations: [CreateComponent, EditComponent, PersonalFormComponent, PersonalComponent],
  imports: [
    CommonModule
  ]
})
export class PersonalModule { }
