import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'frontend for Product Hunt';
  name = "Shubham Sinha";
  today = new Date();
  bind = "bundes";
  counter = 0;
  mychoice = "green";

  ngOnInit() { 
    console.log("conmponent Initiated");
  }


  click = function (event: any) {
    console.log("clicked");
    console.log(event);
  }

  clickTest = (bind) => { 
    this.counter += 1
    console.log(bind);
  }
}
