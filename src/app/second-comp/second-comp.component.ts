import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-comp',
  templateUrl: './second-comp.component.html',
  styleUrls: ['./second-comp.component.css'],

})
export class SecondCompComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  title = 'Second Component';
  messageOne = '';
  messageTwo = 'This is the displayed message.';

  onFirstClick() {
    console.log("Button is Clicked now");
    this.messageOne = 'Button is Clicked now';
    this.messageOne = this.messageTwo;
    return this.messageOne;
    
  }

}
