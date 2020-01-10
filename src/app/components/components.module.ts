import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailsComponent } from './user-details/user-details.component';
import { PipesModule } from '../pipes/pipes.module';
import { TranslateModule } from '@ngx-translate/core';
import { UserFormComponent } from './users/user-form/user-form.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { RouterModule } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgSelect2Module } from 'ng-select2';

@NgModule({
  declarations: [
    UserDetailsComponent,
    UserFormComponent,
    UsersListComponent
  ],
  imports: [
    CommonModule,
    PipesModule,
    RouterModule,
    DataTablesModule,
    TranslateModule.forChild(),
    FormsModule,
    NgSelect2Module,
    ReactiveFormsModule
  ],
  exports: [
    UserDetailsComponent,
    UserFormComponent,
    UsersListComponent
  ]
})
export class ComponentsModule { }
