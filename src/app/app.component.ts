import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    public translateService: TranslateService
  ) {
    this.translateService.addLangs( [ 'es', 'en' ] );
    this.translateService.setDefaultLang( 'es' );
    this.translateService.use( 'en' );
  }

}
