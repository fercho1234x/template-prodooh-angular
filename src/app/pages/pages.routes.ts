import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DemoComponent } from './demo/demo.component';

const PAGESROUTES: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'demo', component: DemoComponent },
            { path: '', redirectTo: '/demo', pathMatch: 'full' },
        ]
    }
];

export const PAGES_ROUTES = RouterModule.forChild( PAGESROUTES );
