import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-reusable-animations-demo';

  userCounter = 0;

  get totalCounter() {
    return this.userCounter + 1337;
  }

}
