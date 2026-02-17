import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import { UserOperationsService } from '../shared/user-operations.service';
import { UserRegistrationEntity } from '../shared/user-registration-entity';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent {

  // gender:string="male"
  isAccept=true
  registrationForm: FormGroup
  userlst: UserRegistrationEntity[]= []

  branchList :any[];

  constructor(public service:UserOperationsService,private resForm:FormBuilder){
    this.registrationForm=resForm.group({
     firstName:['',Validators.required],
     lastName:['',Validators.required],
     emailId:['',[Validators.required,Validators.email]],
     middleName:[],
     DOB:[],
     Gender:[],
     isAccept:[]

    })

 this.branchList=[{
   Id:1,branchname:'Science'
  },
  {
   Id:2,branchname:'Commerce'
  },
   {
   Id:3,branchname:'Arts'
  },
]

  }
 
// ngOnInit()
// {
//   this.registrationForm.patchValue(this.service.formData);
// }
  RegisetrUser(userRegisterForm: NgForm):void{

    debugger;

    var firstame=userRegisterForm.controls['firstName'].value
    var lastname=userRegisterForm.controls['lastName'].value
    // var genders=userRegisterForm.controls['gender'].value
var formdt=userRegisterForm.form.value;
  }

  RegisterNewUser()
  {
    debugger;
    if(this.registrationForm.valid)
    {
      const updatedUser = { ...this.service.formData, ...this.registrationForm.value }; // 🔁 Merge changes
      console.log('Updated User:', updatedUser );
        this.service.PostUserDetails(updatedUser).subscribe({
      next:res=>{
        console.log(res)
      },
      error:err=>{
        console.log(err)
      }
    })
    }
  
  }

  GetAllusersFun (searchparam:string) :void
  {
     this.service.GetAllUsers(searchparam).subscribe(
      {
        next: data=>{
           this.userlst=data
        },
        
        error: err => console.error('Observable error:', err)
      }
      // (data:UserRegistrationEntity[])=>{
      //   this.userlst=data
      //   console.log(data);
      // },
      // (error)=>
      // {
      //    console.log(error);
      // }
      
    );
  }
}
