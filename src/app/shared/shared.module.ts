import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PagenofoundComponent } from './pagenofound/pagenofound.component';
import { PipesModule } from '../pipes/pipes.module';

import {TranslateModule} from '@ngx-translate/core';

@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        PipesModule,
        TranslateModule.forChild(),
    ],
    declarations: [
        NavbarComponent,
        FooterComponent,
        PagenofoundComponent
    ],
    // Por si se requires estos modulos en otro componente
    exports: [
        NavbarComponent,
        FooterComponent,
        PagenofoundComponent
    ]
})

export class SharedModule {}
