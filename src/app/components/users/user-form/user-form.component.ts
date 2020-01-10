import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { CompaniesService } from '../../../services/companies/companies.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Company } from '../../../models/companies.model';
import { UsersService } from '../../../services/users.service';
import { Router } from '@angular/router';
import { Select2OptionData } from 'ng-select2';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styles: []
})
export class UserFormComponent implements OnInit, OnDestroy {

  @Input() title: string;

  @Output() emitUserData: EventEmitter<User> = new EventEmitter<User>();

  forma: FormGroup;

  formaCompany: string;

  companies: Company[] = [];

  companiesDataSelect2: Array<Select2OptionData>;

  placeholderCompany: string;

  constructor(
    private companiesService: CompaniesService,
    private usersService: UsersService,
    private router: Router,
    private translateService: TranslateService
  ) {

    if ( this.router.url === '/administrator/users/update' &&  !this.usersService.selectedUser ) {
      this.router.navigateByUrl( '/administrator/users/register' );
    }

    this.placeholderCompany = this.translateService.instant( 'selectCompany' );

  }

  ngOnInit() {

    this.forma = new FormGroup({
      name:        new FormControl( null, [ Validators.required, Validators.minLength( 2 ), Validators.pattern( '^[^<>]*$' ) ] ),
      surnames:    new FormControl( null, [ Validators.required, Validators.minLength( 3 ), Validators.pattern( '^[^<>]*$' ) ] ),
      company:     new FormControl( null, [ Validators.required, Validators.min( 0 ) ] ),
      email:       new FormControl( null, [ Validators.required, Validators.email ] ),
      password:    new FormControl( null, [ Validators.required, Validators.minLength( 6 ), Validators.pattern( '^[^<>]*$' ) ] ),
      typeOfUser:  new FormControl( '', [ Validators.required, Validators.min( 1 ) ] )
    });

    this.companiesService.getCompanies( 'all' )
      .subscribe( companies => {
        this.companies = companies;
        this.companiesDataSelect2 = companies.map( ( company: Company ) => {
          return { id: company.id , text: company.name_company.toUpperCase() };
        });
      });

  }

  saveData() {

    console.log( this.forma.value );
    console.log( this.forma.valid );

    /* if ( this.forma.invalid ) {
      return;
    } */

    // this.emitUserData.emit( this.user );
  }

  ngOnDestroy() {
    this.usersService.selectedUser = null;
  }

}
