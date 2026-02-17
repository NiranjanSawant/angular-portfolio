import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { CustomErrorComponent } from './custom-error/custom-error.component';
import { UserRegistrationComponent } from './user/user-registration/user-registration.component';
import { ULoginComponent } from './user/ulogin/ulogin.component';
import { UserDataListComponent } from './user/user-data-list/user-data-list.component';

const routes: Routes = [
{path:'',redirectTo:'Uloginpath',pathMatch:'full'},
  {path:'UserLstRoutPath',component:UserListComponent},
  {path:'UserDetailsRoutPath',component:UserDetailsComponent},
  {path:'LoginPath',component:UserLoginComponent},
  {path:'Uloginpath',component:ULoginComponent},
  {path:'RegistrationPath',component:UserRegistrationComponent},
   {path:'UserList',component:UserDataListComponent},
  {path:'**',component:CustomErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
