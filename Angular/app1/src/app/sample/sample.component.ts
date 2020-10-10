import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  // Step1 :
  @Input() message = "" ; // Declaring message Variable as an Input 
  @Input() mydetails={}
  mydetailsKeys;
  @Input() arrayvalues
  constructor() { }

  ngOnInit(): void {
    console.log(this.mydetails)
    this.mydetailsKeys = Object.keys(this.mydetails)
  }

}
