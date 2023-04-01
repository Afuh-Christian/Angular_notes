import { Component, OnInit } from '@angular/core';
import { LoginForm } from 'src/types/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: LoginForm = {
    email: "",
    password: ""
  }

  submit():void {
    alert(this.form.email + "," + this.form.password)
  }

  constructor() { }

  email: String = ""

  ngOnInit(): void {
  }

}
