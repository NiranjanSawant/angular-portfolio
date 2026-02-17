import { Component } from '@angular/core';
import { UserRegistrationEntity } from '../shared/user-registration-entity';
import { UserOperationsService } from '../shared/user-operations.service';

@Component({
  selector: 'app-user-data-list',
  templateUrl: './user-data-list.component.html',
  styleUrls: ['./user-data-list.component.css']
})
export class UserDataListComponent {
userlst: UserRegistrationEntity[]= []
 displayedCol: string[] = ['Name', 'Email'];
constructor(public serv:UserOperationsService){
   
// this.GetAllusersFun ("All");
this.userlst=[
{  
       displayName: 'Niranjan', emailId: 'Rout',
        DOB: '12/8/1988', Gender: 'Male',firstName:'',middleName:'',lastName:'',isActive:true,isAccept:true
    },
    {  
       displayName: 'Pooja', emailId: 'Rout',
        DOB: '12/8/1988', Gender: 'Male',firstName:'',middleName:'',lastName:'',isActive:true,isAccept:true
    },
    {  
       displayName: 'Raghav', emailId: 'Rout',
        DOB: '12/8/1988', Gender: 'Male',firstName:'',middleName:'',lastName:'',isActive:true,isAccept:true
    },
    {  
       displayName: 'Anand', emailId: 'Rout',
        DOB: '12/8/1988', Gender: 'Male',firstName:'',middleName:'',lastName:'',isActive:true,isAccept:true
    },
  
  ]
}

GetAllusersFun (searchparam:string) :void
  {
     this.serv.GetAllUsers(searchparam).subscribe(
      (data:UserRegistrationEntity[])=>{
        this.userlst=data
        console.log(data);
      },
      (error)=>
      {
         console.log(error);
      }
      
    );
  }

}
