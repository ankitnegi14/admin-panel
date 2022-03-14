import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  loginForm!: FormGroup
  hide = true;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      "email": new FormControl('', [Validators.required, Validators.email]),
      "password": new FormControl('', [Validators.required])
    })
  }

  //validator for login form 
  // get email() {
  //   return this.loginForm.get('email');
  // }
  // get password() {
  //   return this.loginForm.get('password');
  // }

  // on loginForm submit
  submitLoginForm(): void {
    if (this.loginForm.invalid) {
      return;
    }
    alert("thanks for login");

    // console.log(JSON.stringify(this.loginForm.value, null, 2));
    console.log(this.loginForm.value)
    this.loginForm.reset();
    this.router.navigate(['admin-panel']);
  }



} 
