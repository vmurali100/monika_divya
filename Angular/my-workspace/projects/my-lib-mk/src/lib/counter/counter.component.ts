import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  counter=0
  constructor() { }

  ngOnInit(): void {
  }
  incrementNumber(){
    this.counter++
  }
  decrementNumber(){
    this.counter--
  }
}

