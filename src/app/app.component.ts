import { Component } from '@angular/core';
import { User } from './address-card/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

   user : User;
   inputTest : String = "Initial Value";
   
  constructor(){
    
    this.user = new User();
    this.user.name = "Foo Bar";
    this.user.designation = "Software Developer";
    this.user.address = "3465 Legacy Dr. Plano, TX 75024";
    this.user.phone = [
      '541-754-3010',	
      '541-754-3010',	
      '541-754-3010',	
      '541-754-3010'
    ];
  }
  
}
