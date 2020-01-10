import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Auth } from '../../models/auth.model';
import { APPCONFIG } from 'src/app/config/config';
import { Router } from '@angular/router';
import Crypto from '../../helpers/crypto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  auth: Auth;
  token: any;

  constructor(
    private _http: HttpClient,
    private _router: Router
  ) {
    this.loadStorage();
  }
  
  getQuery( query:string ) {
    const URL = `${ APPCONFIG.endpoints.url_services }/${ query }`;
    
    const headers = new HttpHeaders({
      'Authorization': `${ this.token != null ? this.token.token_type : 'Bearer' } ${ this.token != null ? this.token.access_token : '' }`
    });
    
    return this._http.get( URL, { headers } );
  }

  getUserAuthenticated() {
    /*this.getQuery( 'users/me' )
     .subscribe( ( data: any ) => {
       this.token = Object.assign( this.token, data );
       localStorage.setItem( APPCONFIG.sessionLocalStorageKey, Crypto.encrypt( JSON.stringify( this.token ) ) );
     })*/

    return this.getQuery( 'users/me' )
      .pipe(
        map( ( response: any ) => {
          this.token = Object.assign( this.token, response );
          localStorage.setItem( APPCONFIG.sessionLocalStorageKey, Crypto.encrypt( JSON.stringify( this.token ) ) );
          return response;
        })
      )

  }

  login( auth: Auth, remember: boolean = false ) {

    if ( remember ) {
      localStorage.setItem( 'email', auth.username );
    } else {
      localStorage.removeItem( 'email' );
    }

    let user = Object.assign( APPCONFIG.serverConfig, auth );

    return this._http.post( APPCONFIG.endpoints.login, user )
      .pipe(
        map( response => {
          this.token = response;
          this.getUserAuthenticated();
          localStorage.setItem( APPCONFIG.sessionLocalStorageKey, Crypto.encrypt( JSON.stringify( response ) ) )
          return true;
        })
      )

  }

  logout() {
    this.getQuery( 'logout' )
      .subscribe( resp => {
        this.token = null;
        localStorage.removeItem( 'sessionData' );
        this._router.navigate( ['/login'] );
      }, () => {
        this.token = null;
        localStorage.removeItem( 'sessionData' );
        this._router.navigate( ['/login'] );
      })
  }
  
  authenticatedUser(): boolean {
    return localStorage.getItem( APPCONFIG.sessionLocalStorageKey ) ? true : false;
  }

  loadStorage() {
    if ( localStorage.getItem( APPCONFIG.sessionLocalStorageKey ) ) {
      this.token = JSON.parse(  Crypto.decrypt( localStorage.getItem( APPCONFIG.sessionLocalStorageKey ) ) );
    }
  }

}
