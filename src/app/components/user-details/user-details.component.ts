import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styles: []
})
export class UserDetailsComponent implements OnInit {

  userAuth: any;

  constructor( private _authService: AuthService ) {}

  ngOnInit() {
    this.userAuth = this._authService.token;
    console.log( this.userAuth );
  }

}
