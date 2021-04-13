import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BranchComponent } from './page/branch/branch.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { BranchFormComponent } from './components/branch-form/branch-form.component';
import { ShowComponent } from './components/show/show.component';



@NgModule({
  declarations: [BranchComponent, CreateComponent, EditComponent, BranchFormComponent, ShowComponent],
  imports: [
    CommonModule
  ]
})
export class BranchModule { }
