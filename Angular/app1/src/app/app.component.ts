import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  myName = "Murali" // Declaring a String In Class
  person = {
    fname:"Ram",
    lname:"Krishna",
    email:"murali@gmail.com",
    mobile:9663856625
  } // Declaring an Object
  personKeys = Object.keys(this.person)

  users = ["Murali","Ram","Monica","Divya"]

  ngOnInit(){
    console.log(this.personKeys)
  }
}

  