import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-binding-app';
  count: number = 0;
  hideLabel: boolean = true;

  buttonPressed() {
    console.log("button pressed");
    this.count++;
  }

  starPressed() {
    console.log("star pressed");
    if (this.hideLabel == true) {
      this.hideLabel = false;
    }
    else {
      this.hideLabel = true;
    }
  }
}
