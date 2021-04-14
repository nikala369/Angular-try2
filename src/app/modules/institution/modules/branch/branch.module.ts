import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BranchFormComponent } from './components/branch-form/branch-form.component';
import { ShowComponent } from './components/showGrid/show.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';

@NgModule({
  declarations: [BranchFormComponent, ShowComponent],
  imports: [CommonModule, SharedModule],
})
export class BranchModule {}
