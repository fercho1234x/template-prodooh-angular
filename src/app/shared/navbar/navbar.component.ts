import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Roles } from '../../models/roles.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  menu: any = {};

  constructor( public authService: AuthService ) {}

  ngOnInit() {
    
    this.authService.getUserAuthenticated()
      .subscribe( () => {
        let roles = new Roles();
        let role = this.authService.token.role_slug;
    
        switch ( this.authService.token.role_slug ) {
          case 'superAdministrator':
            role = 'administrator';
            break;
          case 'sellerCosts':
            role = 'seller';
            break;
          case 'customerCosts':
            role = 'customer';
            break;
        }
      
        this.menu = roles.getMenu( role );
      })
  }

}
