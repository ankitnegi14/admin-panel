import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {


  hide = true;
  addUserForm!: FormGroup;

  constructor(

    private formBuilder: FormBuilder,

  ) { }




  ngOnInit(): void {

    //login form
    this.addUserForm = this.formBuilder.group({
      'firstName': new FormControl('', [Validators.required]),
      'lastName': new FormControl('', [Validators.required]),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', [Validators.required]),
      'phoneNo': new FormControl('', [Validators.required, Validators.maxLength(15)]),
      'dob': new FormControl('', [Validators.required]),
      'gender': new FormControl('', [Validators.required]),
      'message': new FormControl('', [Validators.required]),
    })

  }

  // validation for addUserForm
  get f() {
    return this.addUserForm.controls;
  }


  submitAddUserForm() {
    if (this.addUserForm.invalid) {
      return;
    }
    console.log(this.addUserForm.value)
    this.addUserForm.reset();

  }
}
