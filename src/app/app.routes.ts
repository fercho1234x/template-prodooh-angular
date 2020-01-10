import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { PagenofoundComponent } from './shared/pagenofound/pagenofound.component';
import { PagesComponent } from './pages/pages.component';
import { AuthGuard } from './services/guards/auth.guard';

const APPROUTES: Routes = [
    { path: 'login', component: LoginComponent },
    {
        path: '',
        component: PagesComponent,
        canActivate: [ AuthGuard ],
        loadChildren: './pages/pages.module#PagesModule'
    },
    { path: '**', component: PagenofoundComponent },
];

export const APP_ROUTES = RouterModule.forRoot( APPROUTES, { useHash: true } );
