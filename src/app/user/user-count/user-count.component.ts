import { Component, EventEmitter, Input,Output } from '@angular/core';

@Component({
  selector: 'app-user-count',
  templateUrl: './user-count.component.html',
  styleUrls: ['./user-count.component.css']
})
export class UserCountComponent {
  @Input()all: number=0;
  @Input()male: number=0;
  @Input()female: number=0;

  countRdiobtnval : string="All";

  @Output() Radiobtneventss : EventEmitter<string>= new EventEmitter<string>();

  OnCountSelectedvalChange(){
    this.Radiobtneventss.emit(this.countRdiobtnval);
  } 
}
