import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login-success',
  templateUrl: './login-success.component.html',
  styleUrls: ['./login-success.component.css']
})
export class LoginSuccessComponent implements OnInit {

  firstName: any;
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.firstName = this.api.getName();
  }

}
