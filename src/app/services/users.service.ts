import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth/auth.service';
import { APPCONFIG } from '../config/config';
import { map } from 'rxjs/operators';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  selectedUser: User;

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {}

  private getQuery( query: string, per_page = 30 ) {
    const URL = `${ APPCONFIG.endpoints.url_services }/${ query }?per_page=${ per_page }`;

    const headers = new HttpHeaders({
      Authorization: `${ this.authService.token.token_type } ${ this.authService.token.access_token }`
    });

    return this.http.get( URL, { headers } );
  }

  getAllSuperAdministrators( per_page? ) {
    return this.getQuery( 'users/superadministrators', per_page )
      .pipe(
        map( (resp: any) => {
          return resp.data;
        })
      );
  }
}
