import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {


  dateMessage : String;
  someNumber : number = 69;

  constructor() { 

    setInterval(() => {
    let curretDate = new Date();

    this.dateMessage = curretDate.toDateString() + ' ' + curretDate.toLocaleTimeString() }, 1000);

    
  }

  
  ngOnInit() {
  }

  addTwoNumbers(a: number, b: number){

    return a + b;
  }

}
