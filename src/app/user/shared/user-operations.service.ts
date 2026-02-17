import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { environment } from 'src/environments/environment.development';
import { UserRegistrationEntity } from './user-registration-entity';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserOperationsService {

  //  const token = 'your-auth-token'; // Replace with your actual token
  //   const headers = new HttpHeaders({
  //     Authorization: `Bearer ${token}`,
  //   });

  //    getDataWithAuth(): Observable<any> {
  //   const token = 'your-auth-token'; // Replace with your actual token
  //   const headers = new HttpHeaders({
  //     Authorization: `Bearer ${token}`,
  //   });

  //   return this.http.get(this.apiUrl, { headers });
  // }
 userlist:UserRegistrationEntity= new UserRegistrationEntity()
  formData: UserRegistrationEntity= new UserRegistrationEntity()
  url : string=environment.apiURL+'User/CreateUser'
  private httpserv:HttpClient 
  constructor(http:HttpClient) {
    this.httpserv=http
   }

  PostUserDetails(formDat:UserRegistrationEntity){
    // debugger;
    //   const token = 'your-auth-token'; // Replace with your actual token
    // const headers = new HttpHeaders({
    //   Authorization: `Bearer ${token}`,
    // });

  return  this.httpserv.post(this.url,formDat);

 
  }

 GetAllUsers (serachparam:string):Observable<UserRegistrationEntity[]>{
    // debugger;
    //   const token = 'your-auth-token'; // Replace with your actual token
    // const headers = new HttpHeaders({
    //   Authorization: `Bearer ${token}`,
    // });

  return  this.httpserv.post<UserRegistrationEntity[]>(this.url,serachparam);

 
  }
  
}
