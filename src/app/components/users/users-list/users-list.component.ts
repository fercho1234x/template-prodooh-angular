import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { UsersService } from '../../../services/users.service';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styles: []
})
export class UsersListComponent implements OnInit {

  role: string;
  superAdministrators: User[];
  dtOptions: any = {
    responsive: true
  };

  constructor(
    private authService: AuthService,
    private usersService: UsersService,
    private router: Router
  ) {
    this.role = this.authService.token.role_slug;
  }

  ngOnInit() {
    if ( this.role === 'superAdministrator') {
      this.usersService.getAllSuperAdministrators()
        .subscribe( users => {
          console.log( users );
          this.superAdministrators = users;
        });
    }
  }

  editUser( user: User ) {
    this.usersService.selectedUser = user;
    this.router.navigateByUrl( '/administrator/users/update' );
  }

}
