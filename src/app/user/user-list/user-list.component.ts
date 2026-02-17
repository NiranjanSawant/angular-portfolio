import { Component } from '@angular/core';
import { UserServiceService } from 'src/app/user-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
UserListArr : any[];
private _userservice:UserServiceService
constructor( userser:UserServiceService){
 // this.UserListArr=userser.GetUsers();
 this._userservice=userser
this.UserListArr=[
{  
        ID: 'std101', FirstName: 'Pranaya', LastName: 'Rout',
        DOB: '12/8/1988', Gender: 'Male', CourseFee: 1234.56
    }]
//     {
//         ID: 'std102', FirstName: 'Anurag', LastName: 'Mohanty',
//         DOB: '10/14/1989', Gender: 'Male', CourseFee: 6666.00
//     },
//     {
//         ID: 'std103', FirstName: 'Priyanka', LastName: 'Dewangan',
//         DOB: '7/24/1992', Gender: 'Female', CourseFee: 6543.15
//     },
//     {
//         ID: 'std104', FirstName: 'Hina', LastName: 'Sharma',
//         DOB: '8/19/1990', Gender: 'Female', CourseFee: 9000.50
//     }
//     ,
//     {
//         ID: 'std105', FirstName: 'Sambit', LastName: 'Satapathy',
//         DOB: '4/12/1991', Gender: 'Male', CourseFee: 9876.54
//     },
//     {
//     ID: 'std106', FirstName: 'Tarun', LastName: 'Mallick',
//     DOB: '4/10/1992', Gender: 'Male', CourseFee: 1278.55
// }
 // ]
}

ngOnInit()
{
  this.UserListArr=this._userservice.GetUsers();
}
  GetTotalUserCount() :number{
    return this.UserListArr.length;
  }

  GetFemaleUserCount() : number{
    return this.UserListArr.filter(usr=>usr.Gender==='Female').length;
  }

  GetMaleUsersCount() :number{
    return this.UserListArr.filter(usr=>usr.Gender==='Male').length;
  }

  LstRdiobtnval : string="All";
  IsValid :boolean=true;

  dropdownvalue :string=""
  todayedate :number=Date.now();

  OnusrListRadio(Selradiobtnvl: string):void{
this.LstRdiobtnval=Selradiobtnvl;
  }

  GetUpdatedUsers():void{
    //this.UserListArr=this.userser.GetUsers();
  }

  TrackByuser(index :number,userarr: any):string{
    return userarr.ID
  }

  ChangeData(valids:boolean){
  this.IsValid=valids;
  }

  SetDropDownValue(drpval :any){
this.dropdownvalue=drpval.target.value;
  }
}
