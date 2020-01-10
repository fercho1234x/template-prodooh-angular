import { NgModule } from '@angular/core';

// MODULOS
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Componentes
import { DemoComponent } from './demo/demo.component';
import { AdministratorComponent } from './administrator/administrator.component';

// RUTAS
import { PAGES_ROUTES } from './pages.routes';

import { PipesModule } from '../pipes/pipes.module';
import { CommonModule } from '@angular/common';
import { DirectoryComponent } from './directory/directory.component';
import { TranslateModule } from '@ngx-translate/core';

// Temporal

@NgModule({
    declarations: [
        DemoComponent,
        AdministratorComponent,
        DirectoryComponent
    ],
    // Por si se requires estos modulos en otro componente
    exports: [
    ],
    imports: [
        CommonModule,
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ReactiveFormsModule,
        PipesModule,
        TranslateModule.forChild(),
    ]
})

export class PagesModule {}
