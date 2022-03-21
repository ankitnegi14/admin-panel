import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListsComponent } from './lists/lists.component';
import { NavigationComponent } from './navigation/navigation.component';


// all routes of navigation component
const routes: Routes = [
  {
    path: '', component: NavigationComponent, children: [
      {
        path: 'dashboard', component: DashboardComponent
      },
      {
        path: 'lists', component: ListsComponent
      },
      {
        path: 'addUser', component: AddUserComponent
      },

    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavigationRoutingModule { }
