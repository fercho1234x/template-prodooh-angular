import { Component, OnInit } from '@angular/core';
declare function init_plugins();

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styles: []
})
export class AdministratorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    init_plugins();
  }

}
