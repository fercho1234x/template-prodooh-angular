import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { PagenofoundComponent } from './shared/pagenofound/pagenofound.component';

const APPROUTES: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '**', component: PagenofoundComponent },
];

export const APP_ROUTES = RouterModule.forRoot( APPROUTES, { useHash: true } );
