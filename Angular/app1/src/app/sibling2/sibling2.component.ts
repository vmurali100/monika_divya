import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'sibling2',
  templateUrl: './sibling2.component.html',
  styleUrls: ['./sibling2.component.css']
})
export class Sibling2Component implements OnInit {
  message:String = ""
  constructor(private commonService:CommonService) { }

  ngOnInit(): void {
    this.commonService.sendInfo.subscribe((data:String)=>{
      this.message = data
    })
  }

}
