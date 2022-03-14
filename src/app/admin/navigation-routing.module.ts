import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDetailComponent } from './add-detail/add-detail.component';
import { ListsComponent } from './lists/lists.component';
import { NavigationComponent } from './navigation/navigation.component';


// all routes of navigation component
const routes: Routes = [
  {
    path: '', component: NavigationComponent, children: [
      {
        path: 'addInfo', component: AddDetailComponent
      },
      {
        path: 'lists', component: ListsComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavigationRoutingModule { }
