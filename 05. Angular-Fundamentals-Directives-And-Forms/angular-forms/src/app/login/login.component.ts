import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  thisIsBad = 'why do I need this?';

  ngOnInit() {
  }

  loginHandler(data) {
    console.log(data);
  }

}
