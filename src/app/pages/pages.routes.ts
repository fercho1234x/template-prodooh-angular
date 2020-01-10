import { RouterModule, Routes } from '@angular/router';

import { DemoComponent } from './demo/demo.component';
import { AuthGuard } from '../services/guards/auth.guard';
import { AdministratorComponent } from './administrator/administrator.component';
import { DirectoryComponent } from './directory/directory.component';

const PAGESROUTES: Routes = [
    { 
        path: 'administrator',
        component: AdministratorComponent,
        loadChildren: './administrator/administrator.module#AdministratorModule'
    },
    { path: 'directory', component: DirectoryComponent },
    { path: '', redirectTo: '/directory', pathMatch: 'full' },
];

export const PAGES_ROUTES = RouterModule.forChild( PAGESROUTES );
