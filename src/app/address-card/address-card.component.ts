import { Component, OnInit, Input } from '@angular/core';
import { User } from './user.model';



@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {

    user : any;
    @Input('user') userobj : User;
    isCollapsed : boolean = true;

  constructor() {
    
   }

   toggleCollapse(){
     this.isCollapsed = !this.isCollapsed;
   }
  ngOnInit() {
    this.user = {
      name : this.userobj.name,
      designation : this.userobj.designation,
      address: this.userobj.address,
      phone : this.userobj.phone
      };



      
  }

}
