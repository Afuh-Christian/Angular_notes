import { Component, OnInit } from '@angular/core';
import { RegisterForm } from 'src/types/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  form: RegisterForm = {
  email: "",
    password: "", 
     passwordconfirm: ""
  }

  submit() {
    alert(`${Object.values(this.form)}`)
  }


  constructor() { }

  ngOnInit(): void {
  }

}
