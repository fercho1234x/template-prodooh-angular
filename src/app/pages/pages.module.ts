import { NgModule } from '@angular/core';

// MODULOS
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

// Componentes
import { DemoComponent } from './demo/demo.component';
import { PagesComponent } from './pages.component';

// RUTAS
import { PAGES_ROUTES } from './pages.routes';

// Temporal

@NgModule({
    declarations: [
        PagesComponent,
        DemoComponent
    ],
    // Por si se requires estos modulos en otro componente
    exports: [
    ],
    imports: [
        SharedModule,
        FormsModule,
        PAGES_ROUTES,
        FormsModule
    ]
})

export class PagesModule {}
