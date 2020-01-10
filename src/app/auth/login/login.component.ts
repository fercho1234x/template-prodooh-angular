import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Auth } from '../../models/auth.model';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  forma: FormGroup;

  remember = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private translateService: TranslateService
  ) { }

  ngOnInit() {

    this.forma = new FormGroup({
      email: new FormControl( null, [ Validators.required ] ),
      password: new FormControl( null, [ Validators.required, Validators.minLength( 5 ) ] ),
      remember: new FormControl( false )
    });

    this.forma.patchValue({
      email: localStorage.getItem( 'email' ) || '',
      remember: localStorage.getItem( 'email' ) ? true : false
    });

    if ( this.authService.token ) {
      this.router.navigateByUrl( 'demo' );
    }

  }

  login() {

    if ( this.forma.invalid ) {
      return;
    }

    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: `${ this.translateService.instant( 'authenticating' ) }...`
    });

    Swal.showLoading();

    const auth = new Auth( this.forma.value.email, this.forma.value.password );

    this.authService.login( auth, this.forma.value.remember )
      .subscribe( resp => {
        Swal.close();
        this.router.navigate([ '/directory' ]);
      }, () => {
        Swal.close();
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: `${ this.translateService.instant( 'errorLogIn' ) }`
        });
      });

  }

}
