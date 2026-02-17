import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLoginComponent } from './user-login/user-login.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { UserListComponent } from './user-list/user-list.component';
import { UserCountComponent } from './user-count/user-count.component';
import { MyTitlePipe } from './my-title.pipe';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ULoginComponent } from './ulogin/ulogin.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule}  from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule,} from '@angular/material/datepicker';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { UserDataListComponent } from './user-data-list/user-data-list.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';




@NgModule({
  declarations: [
    UserLoginComponent,
    UserListComponent,
    UserCountComponent,
    MyTitlePipe,
    UserDetailsComponent,
    UserRegistrationComponent,
    ULoginComponent,
    UserDataListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatRadioModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule
  ],
  exports: [UserLoginComponent,UserListComponent,UserCountComponent,UserRegistrationComponent,ULoginComponent,MatGridListModule,UserDataListComponent],
  providers: [],
    bootstrap: [UserLoginComponent]
})
export class UserModule { }
