import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private api: ApiService) { }

  user = {
    firstName: '',
    lastName: '',
    userName: '',
    password: ''
  };

  ngOnInit() {
  }

  onSubmit(formData) {
    console.log("From registration component");
    console.log(formData.value);
    this.api.register(formData.value).subscribe(data=>{
      if (data["status"]==false) {
          // alert("User with the email exist, try with another email");
          Swal.fire({
            title: 'Sorry Email Already Exist',
            text: 'Try with different email address',
            type: 'warning'
          });
      } else {
        this.router.navigateByUrl("/login");
      }
    });
  }


}


