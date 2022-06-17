import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'First Sprint';
  inputName = 'Amy';
  imageLogo = '';
  constructor() {
    //image location
    this.imageLogo = 'amyLogo.jpg'
  }
}
