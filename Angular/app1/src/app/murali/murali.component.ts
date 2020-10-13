import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'murali',
  templateUrl: './murali.component.html',
  styleUrls: ['./murali.component.css']
})
export class MuraliComponent implements OnInit {

  @Output() sendInfo = new EventEmitter() // Step 1 : created a Custom Event ; 
  message = "Welcome Message from Child Component"
  constructor() { }

  ngOnInit(): void {
  }
  sendMessageToParent(){
   this.sendInfo.emit(this.message) ; //Step 2 :  Emitting or Throwing Data towards Up Ward Direction
  }
}
