import { RouterModule, Routes } from '@angular/router';
import { UserRegisterComponent } from './pages/users/user-register/user-register.component';
import { UserListComponent } from './pages/users/user-list/user-list.component';
import { UsersUpdateComponent } from './pages/users/users-update/users-update.component';

const ADMINISTRATORROUTES: Routes = [
    { path: 'users', component: UserListComponent },
    { path: 'users/register', component: UserRegisterComponent },
    { path: 'users/update', component: UsersUpdateComponent },
    { path: '', redirectTo: '/administrator/users/register', pathMatch: 'full' },
];

export const ADMINISTRATOR_ROUTES = RouterModule.forChild( ADMINISTRATORROUTES );
