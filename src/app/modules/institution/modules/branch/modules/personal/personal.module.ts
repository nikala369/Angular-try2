import { NgModule } from '@angular/core';
import { PersonalFormComponent } from './components/personal-form/personal-form.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';

@NgModule({
  declarations: [PersonalFormComponent],
  imports: [SharedModule],
})
export class PersonalModule {}
