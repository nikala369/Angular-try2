import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { ShowComponent } from './components/showGrid/show.component';
import { BranchFormComponent } from './components/branch-form/branch-form.component';

@NgModule({
  declarations: [BranchFormComponent, ShowComponent],
  imports: [SharedModule],
})
export class BranchModule {}
