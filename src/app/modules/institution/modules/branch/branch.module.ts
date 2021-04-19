import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { BranchFormComponent } from './components/branch-form/branch-form.component';
import { ShowComponent } from './components/showGrid/show.component';

@NgModule({
  declarations: [BranchFormComponent, ShowComponent],
  imports: [SharedModule],
})
export class BranchModule {}
