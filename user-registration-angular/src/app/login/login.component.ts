import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    userName: '',
    password: ''
  };


  constructor(private fb: FormBuilder, private api: ApiService, private router: Router) { }

  ngOnInit() {

  }
  onSubmit(data) {
    this.api.login(data.value).subscribe(data => {
      if (data["success"]) {
        console.log("after", data["firstName"]);
        this.api.setName(data["firstName"]);
        this.router.navigateByUrl("/loginsuccess");
      }
      else {
        Swal.fire({
          title: 'Something Went Wrong',
          type: 'error',
          text: 'Either Email or Password is not correct.!!'
        });
      }
    });
  }







}
