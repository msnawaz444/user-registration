import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  
  firstName: any
  constructor(private http: HttpClient) { }

  login(data) {
    console.log("login data ::", data);
    // return this.http.post("http://localhost:8080/user/login", data);
    return this.http.post("http://localhost:3000/user/login", data);
  }

  register(data) {
    console.log("registration data ::", data);
    // return this.http.post("http://localhost:8080/register", data);
    return this.http.post("http://localhost:3000/user/register", data);
  }

  setName(name) {
    this.firstName = name;
  }
  getName() {
    return this.firstName;
  }

}
