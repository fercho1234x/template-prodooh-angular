import { NgModule } from '@angular/core';
import { ADMINISTRATOR_ROUTES } from './administrator.routes';
import { UserRegisterComponent } from './pages/users/user-register/user-register.component';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../../components/components.module';
import { UserListComponent } from './pages/users/user-list/user-list.component';
import { UsersUpdateComponent } from './pages/users/users-update/users-update.component';

@NgModule({
  declarations: [
    UserRegisterComponent,
    UserListComponent,
    UsersUpdateComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    ADMINISTRATOR_ROUTES
  ], exports: [
  ]
})
export class AdministratorModule { }
