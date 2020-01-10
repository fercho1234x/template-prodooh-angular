import { Injectable } from '@angular/core';
import { APPCONFIG } from 'src/app/config/config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  total_companies:number = 0;

  constructor(
    private _http: HttpClient,
    private _authService: AuthService
  ) { }

  private getQuery( query:string, per_page = 30 ) {
    const URL = `${ APPCONFIG.endpoints.url_services }/${ query }?per_page=${ per_page }`;
    
    const headers = new HttpHeaders({
      'Authorization': `${ this._authService.token.token_type } ${ this._authService.token.access_token }`
    });
    
    return this._http.get( URL, { headers } );
  }

  getCompanies( per_page ) {
    return this.getQuery( 'companies', per_page )
      .pipe(
        map( (resp: any) => {
          return resp.data;
        })
      )
  }

}
