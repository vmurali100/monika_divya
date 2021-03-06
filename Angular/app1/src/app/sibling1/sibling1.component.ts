import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CommonService } from '../common.service';

@Component({
  selector: 'sibling1',
  templateUrl: './sibling1.component.html',
  styleUrls: ['./sibling1.component.css']
})
export class Sibling1Component implements OnInit {
  message="Hello world Message From Sibling1";
  isEdit = false
  // Adding a Cammon Service as a Dependency Injection
  constructor(private cammonService : CommonService,private _http:HttpClient) { }
  allUsers
  // Declaring a Module Driven Form
  userForm = new FormGroup({
    fname:new FormControl(),
    lname:new FormControl(),
    id:new FormControl()
  })

  getUser(){
    this._http.post("http://localhost:3000/users",this.userForm.value).subscribe(res=>{
      this.getAllUsers()
      this.userForm.reset()
    })
  }
  ngOnInit(): void {
    this.getAllUsers()
  }

  getAllUsers(){
    this._http.get("http://localhost:3000/users").subscribe(res=>{
     this.allUsers= res;
    })
  }
  deleteUser(user){
    this._http.delete("http://localhost:3000/users/"+user.id).subscribe(res=>{
      this.getAllUsers()
    })
  }

  editUser(user){
    this.isEdit = true
    this.userForm.setValue(user)
  }
  updateUser(){
    console.log(this.userForm.value)
    this._http.put("http://localhost:3000/users/"+this.userForm.value.id,this.userForm.value).subscribe(res=>{
      this.getAllUsers()
      this.userForm.reset()
      this.isEdit = false
    })
  }
  // sendMessageToSibling2(){
  //   this.cammonService.sendDetaFromSib1(this.message)
  // }

  // This function is for Template Drive form
  // getUser(userForm){
  //   console.log(userForm.value)
  // }

  //This function is for Module Driven Form
  
}
