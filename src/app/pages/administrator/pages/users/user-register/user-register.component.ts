import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styles: []
})
export class UserRegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  register( event ) {
    console.log( event )
  }

}
