import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend for Product Hunt';
  name = "Shubham Sinha";
  today = new Date();
  bind = "bundes";
  counter = 0;

  click = function (event: any) {
    console.log("clicked");
    console.log(event);
  }

  clickTest = (bind) => { 
    this.counter += 1
    console.log(bind);
  }
}
