import { Component, NgModule } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
//  template: `<div>
//                     <h1>{{pageHeader}}</h1> 
//                     <app-user-list></app-user-list>
                    
//                </div>`,
templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 pageHeader: string = 'Student Details';

 constructor(private routs:Router){

 }

 GetUserLists()
 {
  this.routs.navigate(['/UserLstRoutPath']);
 }
}
