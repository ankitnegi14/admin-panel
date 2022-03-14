import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminLoginRoutingModule } from './admin-login-routing.module';
import { AdminLoginComponent } from './admin-login.component';
import { ReactiveFormsModule } from '@angular/forms';

// material ui 
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [AdminLoginComponent],
  imports: [
    CommonModule,
    AdminLoginRoutingModule,
    ReactiveFormsModule,


    // material ui
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,

  ],
})
export class AdminLoginModule { }
