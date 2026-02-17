import { Component } from '@angular/core';
import { FormGroup, NgForm,FormBuilder,Validators } from '@angular/forms';
import { UserOperationsService } from '../shared/user-operations.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ulogin',
  templateUrl: './ulogin.component.html',
  styleUrls: ['./ulogin.component.css']
})
export class ULoginComponent {

  constructor(public service:UserOperationsService,private router:Router){

  }
 LoginUser(){
this.router.navigate(["/UserList"])
 }
}
