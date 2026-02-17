import { Component } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'] ,
  
})
export class UserLoginComponent {
Name :string="Niranjan";
Branch : string="Vikhroli";
Mobile: number = 9876543210;
Gender: string = 'Male';
Age: number = 22;
FirstName :string="Pooja";
LastName : string="Sawant";
ImagePath : string = "https://dotnettutorials.net/wp-content/uploads/2019/09/cropped-dotnettutorials.png";
Title : string="Welcome to Angular Tutorials";
IsDisabledClick :boolean =false;
 MaliciousData : string = "<script>alert('your application is hacked')</script>";
  pageHeader: string = 'Student Details';
  Columnspn : number=2;
  Classtoapp : string="italicClass boldClass"
  applyBoldClass :boolean=true
  applyItalicClass :boolean=true
  Showdetail :boolean=true

GetFullName () :string{
 return this.FirstName+' ' +this.LastName;
}

ApplyClasses() {
  let returncls={
boldClass: this.applyBoldClass,
italicClass : this.applyItalicClass
  }
  return returncls;
}

ToggleDetails() :void{
  this.Showdetail=!this.Showdetail;
}

}
