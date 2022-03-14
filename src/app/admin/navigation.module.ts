import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NavigationRoutingModule } from './navigation-routing.module';
import { AddDetailComponent } from './add-detail/add-detail.component';
import { ListsComponent } from './lists/lists.component';

//material ui imports
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AddDetailComponent,
    ListsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NavigationRoutingModule,

    //material ui modules
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
  ]
})
export class NavigationModule { }
