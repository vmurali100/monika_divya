import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'sibling1',
  templateUrl: './sibling1.component.html',
  styleUrls: ['./sibling1.component.css']
})
export class Sibling1Component implements OnInit {
  message="Hello world Message From Sibling1"
  // Adding a Cammon Service as a Dependency Injection
  constructor(private cammonService : CommonService) { }

  ngOnInit(): void {
  }
  sendMessageToSibling2(){
    this.cammonService.sendDetaFromSib1(this.message)
  }
}
